import { useState, useEffect, useRef } from "react";
import axios from "axios";

const HomeDisplay = () => {
  const [sensorValue, setSensorValue] = useState([]);
  const [actuatorStatus, setActuatorStatus] = useState([]);
  const timerRef = useRef(null);

  const fetchData = async () => {
    try {
      const [sensorResponse, actuatorResponse] = await Promise.all([axios.get(`${process.env.REACT_APP_API}/valueSensors`), axios.get(`${process.env.REACT_APP_API}/statusActuators`)]);
      setSensorValue(sensorResponse.data);
      setActuatorStatus(actuatorResponse.data);
      timerRef.current = setTimeout(fetchData, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <div>
      <div className="container" id="display">
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col column-line">
              <div id="home-sensor-display1" className="sensor-display">
                {sensorValue.map((sensorValue, index) => (
                  <div>
                    <h1>Temperature</h1>
                    <p>{sensorValue.temp} °C</p>
                  </div>
                ))}
              </div>
              <div id="home-sensor-display2" className="sensor-display">
                {sensorValue.map((sensorValue, index) => (
                  <div>
                    <h1>Humidity</h1>
                    <p>{sensorValue.humidity} %</p>
                  </div>
                ))}
              </div>
              <div id="home-sensor-display3" className="sensor-display">
                {sensorValue.map((sensorValue, index) => (
                  <div>
                    <h1>Ligth Intensity</h1>
                    <p>{sensorValue.ldr}</p>
                  </div>
                ))}
              </div>
              <div id="home-sensor-display4" className="sensor-display">
                {sensorValue.map((sensorValue, index) => (
                  <div>
                    <h1>IR Sensor</h1>
                    <p autocapitalize="none">{sensorValue.ir}</p>
                  </div>
                ))}
              </div>
              <div id="home-sensor-display5" className="sensor-display">
                {sensorValue.map((sensorValue, index) => (
                  <div>
                    <h1>Level</h1>
                    <p>{sensorValue.level}</p>
                  </div>
                ))}
              </div>
              <div id="home-sensor-display6" className="sensor-display ph">
                <div>
                  <h1 className="ph-text">Analog Sensor</h1>
                  <p>35%</p>
                </div>
              </div>
              <div id="home-sensor-display7" className="sensor-display ph">
                <div>
                  <h1 className="ph-text">Digital Sensor</h1>
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="col home-actuator">
              <div id="home-actuator-display1" className="actuator-display">
                <h1>Servo Motor</h1>
                <div className="actuator-display-status">
                  {actuatorStatus.map((actuatorStatus, index) => (
                    <div>
                      <p className="actuator-display-img-status">Staus : {actuatorStatus.servo}</p>
                      <img className="actuator-display-img-status" src={actuatorStatus.servo === "online" ? require("../images/green-icon.png") : require("../images/red-icon.png")} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div id="home-actuator-display2" className="actuator-display">
                <h1>DC Motor</h1>
                <div className="actuator-display-status">
                  {actuatorStatus.map((actuatorStatus, index) => (
                    <div>
                      <p className="actuator-display-img-status">Staus : {actuatorStatus.motor}</p>
                      <img className="actuator-display-img-status" src={actuatorStatus.motor === "online" ? require("../images/green-icon.png") : require("../images/red-icon.png")} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div id="home-actuator-display3" className="actuator-display">
                <h1>RGB LED</h1>
                <div className="actuator-display-status">
                  {actuatorStatus.map((actuatorStatus, index) => (
                    <div>
                      <p className="actuator-display-img-status">Staus : {actuatorStatus.led}</p>
                      <img className="actuator-display-img-status" src={actuatorStatus.led === "online" ? require("../images/green-icon.png") : require("../images/red-icon.png")} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div id="home-actuator-display4" className="actuator-display">
                <h1>Solenoid Valve</h1>
                <div className="actuator-display-status">
                  {actuatorStatus.map((actuatorStatus, index) => (
                    <div>
                      <p className="actuator-display-img-status">Staus : {actuatorStatus.solenoid}</p>
                      <img className="actuator-display-img-status" src={actuatorStatus.solenoid === "online" ? require("../images/green-icon.png") : require("../images/red-icon.png")} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div id="home-actuator-display5" className="actuator-display">
                <h1>Buzzer</h1>
                <div className="actuator-display-status">
                  {actuatorStatus.map((actuatorStatus, index) => (
                    <div>
                      <p className="actuator-display-img-status">Staus : {actuatorStatus.buzzer}</p>
                      <img className="actuator-display-img-status" src={actuatorStatus.buzzer === "online" ? require("../images/green-icon.png") : require("../images/red-icon.png")} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDisplay;
