export interface StravaToken {
  expires_at: Date;
  refresh_token: string;
  access_token: string;
}

export interface StravaAuthCodeResponse extends StravaToken {
  athlete: {
    id: string;
  };
}
