import axios from "axios";

const getFullData = async (latitude, longitude, apiKey) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&exclude=minutely`
  );
};

export { getFullData };
