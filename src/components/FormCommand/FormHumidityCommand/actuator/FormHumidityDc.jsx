import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormHumidityDc = () => {
  const [state, setState] = useState({
    humidityValue: "",
    speed: "",
    degree: "",
    condition: ""
  });
  const { actuatorName, humidityValue, speed, direction, condition, commandId } = state;
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/createHumidityDc`, { actuatorName, humidityValue, speed, direction, condition, commandId })
      .then((response) => {
        Swal.fire("Congratulations", "Command successfully added!", "success");
        setState({ ...state, value: "" });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.error,
        });
      });
    setTimeout(function () {
      window.location.reload();
    }, 1300);
  };
  console.log({ ...state, actuatorName });
  //กำหนดค่าให้state
  const inputValue = (name) => (event) => {
    console.log(event.target.value);
    setState({ ...state, [name]: event.target.value });
  };
  useEffect(() => {
    setState({ ...state, actuatorName: "DC Motor" });
  }, []);

  const addId = () => {
    document.getElementById("commandIdHumidityDc").value = crypto.randomUUID();
  };

  return (
    <div>
      <div className="container" id="condition-humidity-actuator-display2">
        <div className="container text-center display-block main-block">
          <h1 className="head-block">Command</h1>
          <form onSubmit={submitForm}>
            <div className="row align-items-start command-form">
              <div className="col column-line command-actuator">
                <h1 className="actuator-name-form">DC motor</h1>
              </div>
              <div className="col column-line command-actuator">
                <h1 className="form-command-head-value">Desired Humidity</h1>
                <h1 className="form-command-head-value value-command">Speed</h1>
                <h1>
                  <select onChange={inputValue("condition")}>
                    <option value="">Condition</option>
                    <option value="greater">Greater</option>
                    <option value="lesser">Lesser</option>
                  </select>
                </h1>
                <h1>
                  <select onChange={inputValue("direction")}>
                    <option value="">Direction</option>
                    <option value="forward">Forward</option>
                    <option value="backward">Backward</option>
                  </select>
                </h1>
              </div>
              <div className="col column-line command-actuator">
                <input type="number" className="form-value" placeholder="Desired Humidity" value={humidityValue} onChange={inputValue("humidityValue")} />
                <input type="number" className="form-value" placeholder="Ratational Speed" value={speed} onChange={inputValue("speed")} />
                <div>
                <button id="commandIdHumidityDc" type="submit" value="" onMouseMove={addId} onClick={inputValue("commandId")} className="form-submit">
                  Save
                </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormHumidityDc;
