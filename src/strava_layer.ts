import DataLayer from "./data_layer";
import { ActivitiesApi, DetailedActivity } from "./strava-client/api";
import OauthLayer from "./oauth_client";

export default class StravaLayer {
  private dl: DataLayer;
  private oa: OauthLayer;

  constructor(dl: DataLayer, oa: OauthLayer) {
    this.dl = dl;
    this.oa = oa;
  }

  private async getActivitiesApiClient() {
    const activities_api = new ActivitiesApi();
    const access_token = await this.oa.getFreshAccessToken();
    activities_api.accessToken = access_token;
    return activities_api;
  }

  async loadActivity(id: number) {
    const activities_api = await this.getActivitiesApiClient();
    const res = await activities_api.getActivityById(id);
    await this.dl.insertActivity(res.body);
  }

  async reloadActivity(id: number) {
    await this.dl.deleteActivity(id);
    await this.loadActivity(id);
  }

  async loadAllActivities() {
    // TODO: If the access token expires while retreiving activities, this won't
    // automatically refresh it.
    const activities_api = await this.getActivitiesApiClient();
    let page = 0;
    let activity_summaries: DetailedActivity[];
    do {
      // Strava API starts with page 1, so it's safe to increment from 0
      // initially.
      page++;
      activity_summaries = (
        await activities_api.getLoggedInAthleteActivities(
          /*before=*/ undefined,
          /*after=*/ undefined,
          page
        )
      ).body;

      for (const activity_summary of activity_summaries) {
        const id = Number(activity_summary.id);
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
      // TODO: Get more than one page once rate-limit-handling is implemented.
      // } while (activity_summaries.length > 0);
    } while (page < 1);
  }
}
