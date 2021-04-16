import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedcountries, setFetchCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchCountries(await fetchCountries());
    };

    fetchApi();
  }, [setFetchCountries]);
  // console.log(fetchedcountries);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="global">Global</option>
          {fetchedcountries.map((country, i) => (
            <option key={i}>{country}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
