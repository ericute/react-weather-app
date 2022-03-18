import axios from "axios";

const getFullData = async (latitude, longitude, apiKey) => {
  console.log("getFullData function");
  console.log({ latitude: latitude, longitude: longitude, apiKey: apiKey });
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&exclude=minutely`
  );
};

export { getFullData };
