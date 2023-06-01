import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Light = () => {
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
    // timerRef.current = setInterval(fetchData, 9300);

    // return () => {
    //   clearTimeout(timerRef.current);
    // };
  }, []);
  return (
    <div>
      {sensorValue.map((sensorValue, index) => (
        <div className="container">
          <div id="light-sensor" className="sensor-command display-block main-block">
            <h1 className="head-block">Light</h1>
            <div className="container">
              <h1 className="value-text-status">{sensorValue.ldr}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Light;
