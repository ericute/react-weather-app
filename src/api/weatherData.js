import axios from "axios";

const getFullData = async (latitude, longitude) => {
  console.log(latitude, longitude);
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}
      &appid=${process.env.REACT_APP_OWM_APIKEY}&units=metric&exclude=minutely`
  );
};

export { getFullData };
