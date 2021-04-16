import React, { useEffect, useState } from "react";
import { fetchDailyDate } from "../../api";
function Chart() {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyDate());
    };
    fetchApi();
  });
  return (
    <div>
      <h1>Chart</h1>
    </div>
  );
}

export default Chart;
