import React, { useState } from "react";
import cities from "../../lib/city.list.json";
import searchStyle from "./Search.module.css";

import Error from "../error/Error";

function Search({ submitSearch }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setErrorMessage("");
  };

  const onChangeQuery = (e) => {
    setErrorMessage("");
    const { value } = e.target;
    setQuery(value);

    let matchingCities = [];

    if (value.length > 3) {
      for (let city of cities) {
        if (matchingCities.length >= 5) {
          break;
        }
        const match = city.name.toLowerCase().startsWith(value.toLowerCase());
        if (match) {
          const cityData = {
            ...city,
            slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`,
          };
          matchingCities.push(cityData);
        }
      }
      if (matchingCities.length === 0) setErrorMessage("City not found.");
      setResults(matchingCities);
      // console.log(results);
      return results;
    }
  };

  return (
    <>
      <div className={searchStyle.search}>
        <input
          type="text"
          placeholder="Type a city"
          value={query}
          onChange={onChangeQuery}
        ></input>
        {query.length > 3 && results.length > 0 && (
          <ul>
            {results.map((city) => {
              return (
                <li key={city.slug}>
                  <a
                    href={`/location/${city.slug}`}
                    onClick={(e) => {
                      submitSearch(e, city);
                      setResults([]);
                      setQuery("");
                    }}
                  >
                    {city.name}
                    {city.state ? `, ${city.state}` : ""}{" "}
                    <span>({city.country})</span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Error message={errorMessage} />
    </>
  );
}

export default Search;
