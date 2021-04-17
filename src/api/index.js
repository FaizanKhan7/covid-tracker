import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    // const modifiedData = {
    //     confirmed: data.confirmed,
    //     recovered: data.recovered,
    //     deaths: data.deaths,
    //     lastUpdate: data.lastUpdate,
    // }
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.log(err);
  }
};

const axiosInstance = axios.create({
  baseURL: "https://covid19.mathdro.id/api",
});

export const fetchDailyData = async () => {
  try {
    const { data } = await axiosInstance.get(`/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get("https://api.covidtracking.com/daily");

//     return data.map(({ active, recovered, death }) => ({
//       confirmed: active,
//       recovered,
//       deaths: death,
//     }));
//   } catch (error) {
//     return error;
//   }
// };

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axiosInstance.get(`/countries`);
    return countries.map((country) => country.name);
    // console.log(response);
  } catch (err) {
    console.log(err);
  }
};
