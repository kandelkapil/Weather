import React, { useState, useEffect } from "react";

const App = () => {
  const [state, setstate] = useState("");
  const [data, setdata] = useState([null]);

  useEffect(() => {
    const fetchapi = async () => {
      const Url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=370892c672dd126534436a2022cff19b&units=metric`;
      const response = await fetch(Url);
      const resdata = await response.json();
      setdata(resdata.main);
    };
    fetchapi();
  }, [state]);

  return (
    <div className="box">
      <div className="input">
        <input
          type="text"
          value={state}
          onChange={(e) => setstate(e.target.value)}
        />
      </div>

      {!data ? (
        <h1>No data found</h1>
      ) : (
        <div>
          <h1>You have typed {state}</h1>
          <h1>The temp is {data.temp} *C</h1>
          <h1>The minimum temp is {data.temp_min} *C</h1>
          <h1>The maximum temp is {data.temp_max} *C</h1>
        </div>
      )}
    </div>
  );
};

export default App;
