import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Irsensor = () => {
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
    // timerRef.current = setInterval(fetchData, 10300);

    // return () => {
    //   clearTimeout(timerRef.current);
    // };
  }, []);
  return (
    <div>
      {sensorValue.map((sensorValue, index) => (
        <div className="container">
          <div id="irsensor-sensor" className="sensor-command display-block main-block">
            <h1 className="head-block">Irsensor</h1>
            <div className="container">
              <h1 className="value-text-status">{sensorValue.ir}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Irsensor;
