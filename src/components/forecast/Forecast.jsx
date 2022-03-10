import React, { useState } from "react";
import forecastStyle from "./Forecast.module.css";
import moment from "moment-timezone";

function Forecast({ forecast }) {
  // console.log(forecast);
  if (!forecast) return <></>;

  // const tz = moment.tz.guess();
  // console.log(moment.tz);
  // console.log(moment().tz);
  // console.log("tz", tz);

  const { cityName, current, timezone, upcomingDays } = forecast;

  console.log("timezone", timezone);
  console.log(moment(new Date(current.sunrise)).format("MM/DD/YYYY h:mm:ss A"));

  return (
    <>
      {forecast ? (
        <>
          <div className={forecastStyle.city}>{cityName}</div>
          <br />
          <div className={forecastStyle.temp}>{current.temp} °C</div>
          <br />
          <div className={forecastStyle.sun}>
            Sunrise{" "}
            {moment
              .unix(current.sunrise)
              .tz(timezone)
              .format("MM/DD/YYYY h:mm:ss A")}{" "}
          </div>
          <div className={forecastStyle.sun}>
            Sunset{" "}
            {moment
              .unix(current.sunset)
              .tz(timezone)
              .format("MM/DD/YYYY h:mm:ss A")}
          </div>
          <div>{upcomingDays}</div>
        </>
      ) : null}
    </>
  );
}

export default Forecast;
