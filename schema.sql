
DROP DATABASE IF EXISTS zwiftdb;

CREATE DATABASE zwiftdb;
\c zwiftdb;

DROP TABLE IF EXISTS ridehistory;

CREATE TABLE ridehistory(
  id serial,
  date date,
  duration smallint,
  power_avg smallint,
  power_max smallint,
  hr_avg smallint,
  hr_max smallint,
  distance smallint,
  calories smallint,
  cadence_avg smallint,
  PRIMARY KEY (id)
);

-- int, smallint, real, double precision, char(N), varchar(n), date, time, timestamp, interval