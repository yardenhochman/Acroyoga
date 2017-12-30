\c acroyoga
drop table users;

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  difficulty VARCHAR(255) NOT NULL
);
