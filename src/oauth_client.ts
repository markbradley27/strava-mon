import { AccessToken, AuthorizationCode, Token } from "simple-oauth2";
import DataLayer from "./data_layer";
import { StravaAuthCodeResponse, StravaToken } from "./types";

export default class OauthLayer {
  private authCodeClient: AuthorizationCode;
  private dl: DataLayer;

  authorizeURL: typeof this.authCodeClient.authorizeURL;

  constructor(dl: DataLayer) {
    this.authCodeClient = new AuthorizationCode({
      client: {
        id: process.env.STRAVA_CLIENT_ID ?? "",
        secret: process.env.STRAVA_CLIENT_SECRET ?? "",
      },
      auth: {
        tokenHost: "https://www.strava.com",
        revokePath: "/oauth/deauthorize",
      },
      options: {
        includeClientCredsInTokenRequests: true,
      },
    });
    this.dl = dl;

    this.authorizeURL = this.authCodeClient.authorizeURL.bind(
      this.authCodeClient
    );
  }

  // Gets a new token from the API via an authorization code.
  async getToken(...params: Parameters<AuthorizationCode["getToken"]>) {
    const tokenRes = await this.authCodeClient.getToken(...params);
    return tokenRes.token as unknown as StravaAuthCodeResponse;
  }

  // Loads a token from the data layer.
  private async loadToken(): Promise<AccessToken> {
    return this.authCodeClient.createToken(
      (await this.dl.getToken()) as unknown as Token
    );
  }

  async revokeToken() {
    const token = await this.loadToken();
    await token.revoke({
      tokenType: "access_token",
      tokenParamName: "access_token",
    });
  }

  async getFreshAccessToken() {
    let token = await this.loadToken();
    if (token.expired()) {
      token = await token.refresh();
      await this.dl.setToken(token.token as unknown as StravaToken);
    }
    return (token.token as unknown as StravaToken).access_token;
  }
}
