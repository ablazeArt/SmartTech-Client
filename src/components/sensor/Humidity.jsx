import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Humidity = () => {
  const [sensorValue, setSensorValue] = useState([]);
  // const timerRef = useRef(null);

  const fetchData = () => {
    axios
    .get(`${process.env.REACT_APP_API}/valueSensors`)
    .then((response) => {
      console.log(response.data);
      setSensorValue(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    fetchData();
    // timerRef.current = setInterval(fetchData, 8200);

    // return () => {
    //   clearTimeout(timerRef.current);
    // };
  }, []);

  return (
    <div>
      {sensorValue.map((sensorValue, index) => (
        <div className="container" key={index}>
          <div id="humidity-sensor" className="sensor-command display-block main-block">
            <h1 className="head-block">Humidity</h1>
            <div className="container">
              <div className="row g-2">
                <div className="col-6">
                  <div className="circlebar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ "--value": `${sensorValue.humidity}` }}></div>
                </div>
                <div className="col-6">
                  <h1 className="value-text">{sensorValue.humidity} %</h1>
                </div>
                <div className="space-box col-12"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Humidity;
