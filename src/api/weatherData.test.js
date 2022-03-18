import { getFullData } from "./weatherData";

// require("regenerator-runtime/runtime");

// jest.mock("./weatherData");
// require("dotenv").config;

const API_KEY = process.env.API_KEY;
console.log("API_KEY", API_KEY);

const manilaData = {
  latitude: 14.6042,
  longitude: 120.982201,
};

describe("Test for Weather Data API calls", () => {
  let getFullDataResponse;
  beforeAll(async () => {
    // console.log("spread manilaData", { ...manilaData });
  });
  afterAll(() => {
    // getFullData.mockReset();
  });

  test("getFullData API call", async () => {
    getFullDataResponse = await getFullData(
      manilaData.latitude,
      manilaData.longitude,
      API_KEY
    );
    console.log("getFullDataResponse", getFullDataResponse);
  });
});
