import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components/index";
import { fetchData } from "./api";
import { useEffect, useState } from "react";

function App() {
  console.log("hello");
  const [data, setData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("");
  useEffect(() => {
    console.log("hello");
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
    setData(fetchingData);
    setSelectedCountry(selectedCountry);
    console.log(country);
  };
  if (Object.keys(data).length === 0) {
    return <h1>loading...</h1>;
  }
  console.log("data", data);
  return (
    <>
      <div className={styles.title}>
        <h1>Covid tracker ☠️</h1>
        <h1>😷 DO GAJ DOORI... MASK HAI ZAROORI 😷</h1>
      </div>
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker
          data={data}
          selectedCountry={selectedCountry}
          handleCountryChange={handleCountryChange}
        />
        <Chart data={data} selectedCountry={selectedCountry} />
      </div>
    </>
  );
}

export default App;
