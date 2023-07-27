CREATE DATABASE pairing_session

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  comment VARCHAR(255)
);