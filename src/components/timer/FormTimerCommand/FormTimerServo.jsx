import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormTimerServo = () => {
  const [state, setState] = useState({
    dayStart: "",
    hourStart: "",
    minuteStart: "",
    dayEnd: "",
    hourEnd: "",
    minuteEnd: "",
    degree: "",
  });

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const optionsDay = weekdays.map((weekday, index) => (
    <option key={index} value={weekday}>
      {weekday}
    </option>
  ));

  const optionsHour = [];
  for (let i = 0; i <= 24; i++) {
    optionsHour.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const optionsMinute = [];
  for (let i = 0; i <= 60; i++) {
    optionsMinute.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const { actuatorName, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, degree, commandId } = state;
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/createTimerServo`, { actuatorName, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, degree, commandId })
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
    document.getElementById("commandIdTimerServo").value = crypto.randomUUID();
  };

  return (
    <div>
      <div className="container" id="timer-actuator-display1">
        <div className="container text-center display-block main-block">
          <h1 className="head-block">Command</h1>
          <form onSubmit={submitForm}>
            <div className="row align-items-start command-form">
              <div className="col column-line command-actuator">
                <h1 className="actuator-name-form">Servo Motor</h1>
              </div>
              <div className="col column-line command-actuator">
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
                <h1 className="actuator-name-form">Starting Time</h1>
                <h1>
                  <select onChange={inputValue("dayStart")}>
                    <option value="">Starting Day</option>
                    {optionsDay}
                  </select>
                </h1>
                <h1>
                  <select onChange={inputValue("hourStart")}>
                    <option value="">Starting Hour</option>
                    {optionsHour}
                  </select>
                </h1>
                <h1>
                  <select onChange={inputValue("minuteStart")}>
                    <option value="">Starting Minute</option>
                    {optionsMinute}
                  </select>
                </h1>
                <h1 className="actuator-name-form">Ending Time</h1>
                <h1>
                  <select onChange={inputValue("dayEnd")}>
                    <option value="">Ending Day</option>
                    {optionsDay}
                  </select>
                </h1>
                <h1>
                  <select onChange={inputValue("hourEnd")}>
                    <option value="">Ending Hour</option>
                    {optionsHour}
                  </select>
                </h1>
                <h1>
                  <select onChange={inputValue("minuteEnd")}>
                    <option value="">Ending Minute</option>
                    {optionsMinute}
                  </select>
                </h1>
              </div>
              <div className="col column-line command-actuator">
                <button id="commandIdTimerServo" type="submit" value="" onMouseMove={addId} onClick={inputValue("commandId")} className="form-submit">
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

export default FormTimerServo;
