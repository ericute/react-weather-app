import { Fragment, useState } from "react";
import forecastStyle from "./Forecast.module.css";
import moment from "moment-timezone";

function Forecast({ forecast }) {
  // console.log(forecast);
  if (!forecast) return <></>;

  const { cityName, current, timezone, daily } = forecast;

  console.log(daily[0]);

  return (
    <>
      {forecast ? (
        <>
          <div className={`row ${forecastStyle.forecast}`}>
            <div className="col-6">
              <div className="row">
                <div className={forecastStyle.city}>{cityName}</div>
              </div>

              <div className="row">
                <div className={forecastStyle.temp}>{current.temp} °C</div>
              </div>
              <div className="row">
                <div className={forecastStyle.sun}>
                  Sunrise{" "}
                  {moment
                    .unix(current.sunrise)
                    .tz(timezone)
                    .format("h:mm:ss A")}{" "}
                </div>
                <div className={forecastStyle.sun}>
                  Sunset{" "}
                  {moment.unix(current.sunset).tz(timezone).format("h:mm:ss A")}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className={forecastStyle.day}>
                  Current weather: {current.weather[0].description}
                </div>
              </div>
              <div className="row">
                <div>
                  <img
                    src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`row ${forecastStyle.weekly}`}>
            {daily.map((curDay) => {
              return (
                <Fragment key={curDay.dt}>
                  <div className="col-4">
                    {moment.unix(curDay.dt).tz(timezone).format("dddd, MMM Do")}
                  </div>
                  <div className="col-4">
                    From {curDay.temp.min}°C to {curDay.temp.max}°C
                  </div>
                  <div className="col-4" style={{ textAlign: "right" }}>
                    {curDay.weather[0].description}
                    <img
                      src={`https://openweathermap.org/img/wn/${curDay.weather[0].icon}@2x.png`}
                      width="40px"
                      height="40px"
                    />
                  </div>
                </Fragment>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
}

export default Forecast;