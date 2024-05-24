import React, { useEffect, useState } from "react";
import "./Staticdata.css";
const Staticdata = () => {
  const [staticData, setStaticData] = useState(null); // Change to null for no data check
  const [month, setMonth] = useState("March");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getMonthNumber = (monthName) => {
    return monthNames.indexOf(monthName) + 1;
  };

  // Fetch Static Data month-wise
  async function fetchData() {
    try {
      const monthNumber = getMonthNumber(month);
      const res = await fetch(
        `http://localhost:8080/api/statistics?month=${monthNumber}`
      );
      const data = await res.json();
      setStaticData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [month]);

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <div>
      <div className="Static-container">
        <div className="controls">
          <div className="static">
            <h3>Statics - {month}</h3>
          </div>

          <select
            value={month}
            onChange={handleMonthChange}
            className="month-select"
            style={{
              backgroundColor: "#EDF6F6",
              width: "80px",
              height: "50px",
            }}
          >
            {monthNames.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div className="data-display">
          {/* Display static data here */}
          {staticData ? (
            <ul>
              <li>Total Sales: {staticData.totalSales}</li>
              <li>Sold Items: {staticData.soldItems}</li>
              <li>Not Sold Items: {staticData.notSoldItems}</li>
            </ul>
          ) : (
            <p>No data available for the selected month.</p>
          )}
        </div>
      </div>

    
    </div>
  );
};

export default Staticdata;
