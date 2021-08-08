
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

--TEST DATA
INSERT INTO ridehistory(
  date, duration, power_avg, power_max, hr_avg, hr_max, distance, calories, cadence_avg)
VALUES
('2021-08-02', 5, 100, 200, 155, 180, 10, 150, 75);

-- int, smallint, real, double precision, char(N), varchar(n), date, time, timestamp, interval