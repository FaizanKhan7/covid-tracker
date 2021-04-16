import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components/index";
import { fetchData } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("");
  useEffect(() => {
    async function fetchApi() {
      const fetchingData = await fetchData();

      console.log(fetchingData);
      setData(fetchingData);
    }
    fetchApi();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchingData = await fetchData();

    console.log(fetchingData);
    setSelectedCountry(selectedCountry);
    console.log(country);
  };
  return (
    <>
      <div className={styles.title}>
        <h1>Covid tracker ☠️</h1>
        <h1>😷 DO GAJ DOORI... MASK HAI ZAROORI 😷</h1>
      </div>
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker
          selectedCountry={selectedCountry}
          handleCountryChange={handleCountryChange}
        />
        <Chart />
      </div>
    </>
  );
}

export default App;
