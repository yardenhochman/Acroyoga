\c acroyoga
drop table poses;
CREATE TABLE IF NOT EXISTS poses (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  type VARCHAR(255) NOT NULL,
  difficulty VARCHAR(255) NOT NULL,
  number_of_people VARCHAR(255) NOT NULL
);

INSERT INTO poses (name,type,difficulty,number_of_people) VALUES
    ('Headfirst Grasshopper','L-Base','Hard','2 Person'),
    ('Hanging Bat','L-Base','Intermediate','2 Person'),
    ('Moon Bridge','L-Base','Intermediate','2 Person'),
    ('Ostrich Lab','L-Base','Hard','2 Person'),
    ('Foot-To-Foot Lord of the Dance Pose','L-Base','Hard','2 Person'),
    ('Lotus Pile','L-Base','Intermediate','3 Person'),
    ('Bowsprit','L-Base','Hard','2 Person'),
    ('Double Throne','L-Base','Intermediate','3 Person'),
    ('Sticky Lab','L-Base','Intermediate','2 Person'),
    ('Boredstand','L-Base','Intermediate','2 Person'),
    ('Birds Dive','L-Base','Intermediate','2 Person'),
    ('Scorpions Kiss','L-Base','Hard','2 Person'),
    ('Reverse Space Needle','L-Base','Hard','2 Person'),
    ('Goofy Goofy Foot to Foot','L-Base','Intermediate','2 Person'),
    ('Reverse Foot-To-Foot','L-Base','Intermediate','2 Person'),
    ('Foot Sirsasana','L-Base','Hard','2 Person'),
    ('Asymmetrical on Foot','L-Base','Intermediate','2 Person'),
    ('Reverse Low Foot-To-Hand','L-Base','Intermediate','2 Person'),
    ('Calatrava','L-Base','Intermediate','3 Person'),
    ('Thinker','L-Base','Easy','2 Person'),
    ('Vishnu’s Hook','L-Base','Intermediate','2 Person'),
    ('Satellite','L-Base','Hard','2 Person'),
    ('Foot-To-Foot Headstand','L-Base','Really Hard','2 Person'),
    ('Bluejay','L-Base','Hard','4 Person'),
    ('Pike Pyramid','L-Base','Intermediate','3 Person'),
    ('Bicep Stand','L-Base','Intermediate','2 Person'),
    ('Maple','L-Base','Intermediate','2 Person'),
    ('Goofy Chair','L-Base','Easy','2 Person');
