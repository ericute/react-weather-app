import { getFullData } from "./weatherData";

// require("regenerator-runtime/runtime");

jest.mock("./weatherData");

const manilaData = {
  latitude: 14.6042,
  longitude: 120.982201,
};

describe("Test for Weather Data API calls", () => {
  let getFullDataResponse;
  beforeAll(async () => {
    console.log({ ...manilaData });
    getFullDataResponse = await getFullData({ ...manilaData });
  });
  afterAll(() => {
    getFullData.mockReset();
  });

  test("getFullData API call", async () => {
    console.log(getFullDataResponse);
  });
});
