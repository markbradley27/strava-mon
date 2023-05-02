import { Pool } from "pg";
import { DetailedActivity } from "./strava-client/api";
import { StravaAuthCodeResponse, StravaToken } from "./types";

interface User {
  athlete_id: number;
  access_token: string;
  access_token_expires_at: Date;
  refresh_token: string;
}

export default class DataLayer {
  private db: Pool;

  constructor() {
    this.db = new Pool();
  }

  async insertUser(stravaAuth: StravaAuthCodeResponse) {
    await this.db.query(
      "INSERT INTO users (athlete_id, access_token, access_token_expires_at, refresh_token) VALUES ($1, $2, $3, $4)",
      [
        stravaAuth.athlete.id,
        stravaAuth.access_token,
        stravaAuth.expires_at,
        stravaAuth.refresh_token,
      ]
    );
  }

  async setToken(token: StravaToken) {
    // Currently only supporting one user, so it just updates all rows (there
    // should only be one).
    await this.db.query(
      "UPDATE users SET access_token = $1, access_token_expires_at = $2, refresh_token = $3",
      [token.access_token, token.expires_at, token.refresh_token]
    );
  }

  async getToken(): Promise<StravaToken> {
    const res = await this.db.query<User>(
      "SELECT access_token, access_token_expires_at, refresh_token FROM users"
    );
    return {
      access_token: res.rows[0].access_token,
      expires_at: res.rows[0].access_token_expires_at,
      refresh_token: res.rows[0].refresh_token,
    } as StravaToken;
  }

  async deleteUser() {
    // Currently only supporting one user, so it deletes all rows (there should
    // only be one).
    await this.db.query("DELETE FROM users");
  }

  async insertActivity(activity: DetailedActivity) {
    await this.db.query("INSERT INTO activities (activity) VALUES ($1)", [
      activity,
    ]);
  }

  async deleteActivity(id: number) {
    await this.db.query(`DELETE FROM activities WHERE activity @> $1`, [
      `{"id": ${id}}`,
    ]);
  }

  async deleteActivities() {
    await this.db.query("DELETE FROM activities");
  }
}
