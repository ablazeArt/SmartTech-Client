import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormIrsensorServo = () => {
  const [state, setState] = useState({
    irsensorValue: "",
    degree: "",
    condition: "",
  });
  const { actuatorName, irsensorValue, degree, condition, commandId } = state;
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/createIrsensorServo`, { actuatorName, irsensorValue, degree, condition, commandId })
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
    setState({ ...state, actuatorName: "Servo Motor" });
  }, []);

  const addId = () => {
    document.getElementById("commandIdIrsensorServo").value = crypto.randomUUID();
  };

  return (
    <div>
      <div className="container" id="condition-irsensor-actuator-display1">
        <div className="container text-center display-block main-block">
          <h1 className="head-block">Command</h1>
          <form onSubmit={submitForm}>
            <div className="row align-items-start command-form">
              <div className="col column-line command-actuator">
                <h1 head-block>Servo Motor</h1>
              </div>
              <div className="col column-line command-actuator">
                <h1>
                  <select onChange={inputValue("irsensorValue")}>
                    <option value="">Ir Sensor Status</option>
                    <option value="Detected">Detected</option>
                    <option value="Non-Detected">Non-Detected</option>
                  </select>
                </h1>
                <h1>
                  <select onChange={inputValue("degree")}>
                    <option value="">Rotational Degree</option>
                    <option value="-180">-180</option>
                    <option value="-165">-165</option>
                    <option value="-150">-150</option>
                    <option value="-135">-135</option>
                    <option value="-120">-120</option>
                    <option value="-105">-105</option>
                    <option value="-90">-90</option>
                    <option value="-75">-75</option>
                    <option value="-60">-60</option>
                    <option value="-45">-45</option>
                    <option value="-30">-30</option>
                    <option value="-15">-15</option>
                    <option value="0">0</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                    <option value="60">60</option>
                    <option value="75">75</option>
                    <option value="90">90</option>
                    <option value="105">105</option>
                    <option value="120">120</option>
                    <option value="135">135</option>
                    <option value="150">150</option>
                    <option value="165">165</option>
                    <option value="180">180</option>
                  </select>
                </h1>
              </div>
              <div className="col column-line command-actuator">
                <button id="commandIdIrsensorServo" type="submit" value="" onMouseMove={addId} onClick={inputValue("commandId")} className="form-submit">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormIrsensorServo;
