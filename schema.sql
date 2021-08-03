DROP DATABASE IF EXISTS zwiftAnalyzer;
CREATE DATABASE zwiftAnalyzer;
\c zwiftAnalyzer;

DROP TABLE IF EXISTS Ride_History;
CREATE TABLE Ride_History (
  RideID serial,
  RideDate date,  --may need to work with this....
  RideDuration smallint,
  RidePowerAvg smallint,
  RidePowerMax smallint,
  RideHRAvg smallint,
  RideHRMax smallint,
  RideDistance smallint,
  RideCalories smallint,
  RideCadenceAvg smallint,
  PRIMARY KEY (RideID)
);


--TEST DATA
INSERT INTO Ride_History
(RideDate, RideDuration, RidePowerAvg, RidePowerMax, RideHRAvg, RideHRMax, RideDistance, RideCalories, RideCadenceAvg)
VALUES
(2021-08-02, 5, 100, 200, 155, 180, 10, 150, 75);


-- int, smallint, real, double precision, char(N), varchar(n), date, time, timestamp, interval