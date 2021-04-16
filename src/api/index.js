import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

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

export const fetchDailyDate = async () => {
  try {
    const { data } = await axiosInstance.get(`/daily`);
  } catch (err) {
    console.log(err);
  }
};
