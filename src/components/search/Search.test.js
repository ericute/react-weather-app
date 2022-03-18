import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";

describe("Search box rendering", () => {
  test("on load, a search field should be available", () => {
    render(
      <Search
        submitSearch={() => {
          // console.log("Mock run");
        }}
      />
    );
    const cityInput = screen.getByPlaceholderText(/Type a city/);
    expect(cityInput instanceof HTMLInputElement).toBe(true);
  });
  test("city field is populated correctly", () => {
    render(<Search submitSearch={() => {}} />);
    const cityInput = screen.getByPlaceholderText(/Type a city/);
    fireEvent.change(cityInput, { target: { value: "Manila" } });
    expect(cityInput.value).toEqual("Manila");
  });
  test("when more than 3 characters are provided, onChange function gets triggered", () => {
    const searchFn = jest.fn();
    render(<Search submitSearch={searchFn} />);
    const cityInput = screen.getByPlaceholderText(/Type a city/);
    fireEvent.change(cityInput, { target: { value: "Manila" } });

    const results = screen.getByTestId("intellisense-result");
    // console.log(results.innerHTML);
    expect(results.innerHTML.split("href").length - 1).toBe(3);
  });
});
