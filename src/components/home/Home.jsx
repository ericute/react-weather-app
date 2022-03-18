import React, { useState } from "react";
import Header from "../header/Header";
import Search from "../search/Search";
import Forecast from "../forecast/Forecast";

import homeStyle from "./Home.module.css";

import axios from "axios";

import { getFullData } from "../../api/weatherData";

function Home() {
  const API_KEY = process.env.REACT_APP_OWM_APIKEY;
  const [forecast, setForecast] = useState(null);

  const submitSearch = async (e, city) => {
    // console.log(city);
    const cityName = `${city.name} ${
      city.state ? `, ${city.state} (${city.country})` : `(${city.country})`
    }`;

    e.preventDefault();

    // console.log(city.coord);

    const { data } = await getFullData(city.coord.lat, city.coord.lon, API_KEY);

    if (data) {
      console.log(data);
      const updatedData = { ...data, cityName };
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
