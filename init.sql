CREATE TABLE IF NOT EXISTS activities(
  activity jsonb
);

CREATE TABLE IF NOT EXISTS users(
  athlete_id bigint PRIMARY KEY,
  access_token text,
  access_token_expires_at timestamp,
  refresh_token text
);
