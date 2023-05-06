import DataLayer from "./data_layer";
import { ActivitiesApi, HttpError, SummaryActivity } from "./strava-client/api";
import OauthLayer from "./oauth_layer";
import http from "http";

function parseRateLimitHeaders(headers: http.IncomingHttpHeaders) {
  const x_ratelimit_limit = headers["x-ratelimit-limit"];
  const x_ratelimit_usage = headers["x-ratelimit-usage"];
  const date = headers["date"];
  if (
    x_ratelimit_limit === undefined ||
    Array.isArray(x_ratelimit_limit) ||
    x_ratelimit_usage === undefined ||
    Array.isArray(x_ratelimit_usage) ||
    date === undefined
  ) {
    return undefined;
  }

  const [fifteen_minute_limit, daily_limit] = x_ratelimit_limit.split(",");
  const [fifteen_minute_usage, daily_usage] = x_ratelimit_usage.split(",");

  return {
    fifteen_minute_limit: Number(fifteen_minute_limit),
    daily_limit: Number(daily_limit),
    fifteen_minute_usage: Number(fifteen_minute_usage),
    daily_usage: Number(daily_usage),
    date: new Date(date),
  };
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForRateLimit<
  P extends unknown[],
  R extends Promise<{ response: http.IncomingMessage }>
>(api_fn: (...params: P) => R, ...params: P) {
  try {
    return await api_fn(...params);
  } catch (error) {
    const httpError = error as HttpError;
    if (httpError.statusCode !== 429) {
      throw error;
    }

    const rate_counts = parseRateLimitHeaders(httpError.response.headers);
    if (rate_counts === undefined) {
      throw error;
    }
    const {
      fifteen_minute_limit,
      daily_limit,
      fifteen_minute_usage,
      daily_usage,
      date,
    } = rate_counts;

    let limit_name: string = "";
    let milliseconds_to_wait: number | undefined = undefined;
    if (daily_usage > daily_limit) {
      // Wait until next day.
      limit_name = "Daily";
      const hours_to_go = 23 - date.getHours();
      const minutes_to_go = 59 - date.getMinutes();
      const seconds_to_go = 59 - date.getSeconds();
      const milliseconds_to_go = 1000 - date.getMilliseconds();
      milliseconds_to_wait =
        milliseconds_to_go +
        1000 * (seconds_to_go + 60 * (minutes_to_go + 60 * hours_to_go));
    } else if (fifteen_minute_usage > fifteen_minute_limit) {
      // Wait until next 15 minute period.
      limit_name = "Fifteen minute";
      const minutes_to_go = 14 - (date.getMinutes() % 15);
      const seconds_to_go = 59 - date.getSeconds();
      const milliseconds_to_go = 1000 - date.getMilliseconds();
      milliseconds_to_wait =
        milliseconds_to_go + 1000 * (seconds_to_go + 60 * minutes_to_go);
    }

    if (milliseconds_to_wait === undefined) {
      throw error;
    }

    // Add a little wiggle room.
    milliseconds_to_wait += 3000;

    const wait_until = new Date(date.getTime() + milliseconds_to_wait);
    console.log(
      `${limit_name} limit hit, waiting until ${wait_until.toISOString()}...`
    );
    await delay(milliseconds_to_wait);
    return api_fn(...params);
  }
}

export default class StravaLayer {
  private dl: DataLayer;
  private oa: OauthLayer;

  constructor(dl: DataLayer, oa: OauthLayer) {
    this.dl = dl;
    this.oa = oa;
  }

  private async activitiesApiClient() {
    const activities_api = new ActivitiesApi();
    const access_token = await this.oa.getFreshAccessToken();
    activities_api.accessToken = access_token;
    return activities_api;
  }

  async loadActivity(id: number) {
    const activities_api = await this.activitiesApiClient();
    const res = await waitForRateLimit(
      activities_api.getActivityById.bind(activities_api),
      id
    );
    await this.dl.insertActivity(res.body);
  }

  async reloadActivity(id: number) {
    await this.dl.deleteActivity(id);
    await this.loadActivity(id);
  }

  async syncAllActivities() {
    let page = 0;
    let activity_summaries: SummaryActivity[];
    do {
      // Strava API starts with page 1, so it's safe to increment from 0
      // initially.
      page++;
      const activities_api = await this.activitiesApiClient();
      activity_summaries = (
        await waitForRateLimit(
          activities_api.getLoggedInAthleteActivities.bind(activities_api),
          /*before=*/ undefined,
          /*after=*/ undefined,
          page
        )
      ).body;

      for (const activity_summary of activity_summaries) {
        const id = Number(activity_summary.id);

        if ((await this.dl.getActivity(id)) !== undefined) {
          console.log(
            `Skipping activity already in db; id: ${id}, name: ${activity_summary.name ?? "undefined"
            }`
          );
          continue;
        }

        console.log(
          // eslint-disable-next-line prettier/prettier
          `Fetching activity; id: ${id}, name: ${activity_summary.name ?? "undefined"
          }`
        );
        try {
          await this.loadActivity(id);
        } catch (error) {
          console.log(
            `Error fetching activity; id: ${id}, error: ${JSON.stringify(
              error as Error
            )} `
          );
          return;
        }
      }
    } while (activity_summaries.length > 0);
  }
}
