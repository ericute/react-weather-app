import { getFullData } from "./weatherData";
import axios from "axios";

jest.mock("axios");

const API_KEY = process.env.API_KEY;

const manilaData = {
  latitude: 14.6042,
  longitude: 120.982201,
};

const manilaResolvedValue = {
  lat: 14.6042,
  lon: 120.9822,
  timezone: "Asia/Manila",
  timezone_offset: 28800,
  current: {
    dt: 1647610818,
    sunrise: 1647554521,
    sunset: 1647597995,
    temp: 28.73,
    feels_like: 34,
    pressure: 1007,
    humidity: 80,
    dew_point: 24.93,
    uvi: 0,
    clouds: 100,
    visibility: 5000,
    wind_speed: 4.63,
    wind_deg: 10,
    weather: [
      { description: "broken clouds", icon: "04n", id: 803, main: "Clouds" },
    ],
  },
};

describe("Test for Weather Data API calls", () => {
  beforeAll(async () => {});
  afterAll(() => {
    axios.mockReset();
  });

  test("Manila coordinates should return correct data for Manila", async () => {
    axios.get.mockResolvedValue(manilaResolvedValue);

    const data = await getFullData(
      manilaData.latitude,
      manilaData.longitude,
      API_KEY
    );

    expect(data).toEqual(expect.objectContaining(manilaResolvedValue));
  });
});
