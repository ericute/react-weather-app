import React, { useState } from "react";
import Header from "../header/Header";
import Search from "../search/Search";
import Forecast from "../forecast/Forecast";

import homeStyle from "./Home.module.css";

import axios from "axios";

function Home() {
  const [forecast, setForecast] = useState(null);

  const submitSearch = async (e, city) => {
    // console.log(city);
    const cityName = `${city.name} ${
      city.state ? `, ${city.state} (${city.country})` : `(${city.country})`
    }`;

    e.preventDefault();

    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.REACT_APP_OWM_APIKEY}&units=metric&exclude=minutely`
    );

    if (data) {
      // console.log(data);
      const updatedData = { ...data, cityName };
      // console.log("updatedData", updatedData);
      setForecast(updatedData);
    }
  };

  return (
    <>
      <Header />
      <div className={homeStyle.box}>
        <Search submitSearch={submitSearch} />
        <Forecast forecast={forecast} />
      </div>
    </>
  );
}

export default Home;
