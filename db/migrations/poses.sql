\c acroyoga
drop table poses;
CREATE TABLE IF NOT EXISTS poses (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  type VARCHAR(255) NOT NULL,
  difficulty VARCHAR(255) NOT NULL,
  number_of_people VARCHAR(255) NOT NULL,
  img VARCHAR(255) NOT NULL
);

