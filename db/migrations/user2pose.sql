\c acroyoga

drop table user2pose;
CREATE TABLE IF NOT EXISTS user2pose (
  user_id INTEGER NOT NULL,
  pose_id INTEGER NOT NULL,
  list_name VARCHAR(255) NOT NULL
);
