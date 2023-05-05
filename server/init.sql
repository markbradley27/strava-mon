CREATE TABLE users(
  athlete_id bigint PRIMARY KEY,
  access_token text,
  access_token_expires_at timestamp,
  refresh_token text
);

CREATE TABLE activities(
  activity jsonb
);

CREATE VIEW activity_types AS
  SELECT activity->'type' AS type, count(activity) as count
    FROM activities
    GROUP BY type
    ORDER BY type;
