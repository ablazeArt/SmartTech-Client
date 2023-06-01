import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Temp = () => {
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
    // timerRef.current = setInterval(fetchData, 7100);

    // return () => {
    //   clearTimeout(timerRef.current);
    // };
  }, []);
  return (
    <div>
      {sensorValue.map((sensorValue, index) => (
        <div className="container">
          <div id="temp-sensor" className="sensor-command display-block main-block">
            <h1 className="head-block">Temperature</h1>
            <div className="container">
              <div className="row g-2">
                <div className="col-6">
                  <div className="circlebar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ "--value": `${sensorValue.temp}` }}></div>
                </div>
                <div className="col-6">
                  <h1 className="value-text">{sensorValue.temp} Celsius</h1>
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

export default Temp;
