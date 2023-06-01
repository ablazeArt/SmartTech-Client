import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarComponent from "../../../NavbarComponent";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const TimerDcEdit = () => {
  const [state, setState] = useState({
    dayStart: "",
    hourStart: "",
    minuteStart: "",
    dayEnd: "",
    hourEnd: "",
    minuteEnd: "",
    direction: "",
    speed: "",
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
    const formattedNumber = i.toString().padStart(2, "0");
    optionsMinute.push(
      <option key={i} value={formattedNumber}>
        {formattedNumber}
      </option>
    );
  }

  const { actuatorName, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, direction, speed } = state;
  const { commandId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/commandTimerDc/${commandId}`)
      .then((response) => {
        //แยกข้อมูล
        const { dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, direction, speed } = response.data;
        //เก็บข้อมูลเดิม
        setState({ ...state, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, direction, speed });
      })
      .catch((err) => console.log(err.response.data));
    // eslint-disable-next-line
  }, []);

  const showUpdateForm = () => {
    return (
      <div className="body-main">
        <div className="container" id="edit-timer-servo-display">
          <div className="head-edit">
            <h1>Edit Command</h1>
          </div>
          <div className="container text-center display-block main-block edit-block" style={{ paddingTop: "23px" }}>
            <form onSubmit={submitForm}>
              <div className="row align-items-start">
                <div className="col column-line command-actuator">
                  <h1 head-block>Dc Motor</h1>
                </div>
                <div className="col column-line command-actuator">
                  <h1 className="form-command-head-value value-command">Speed</h1>
                  <h1>
                    <select onChange={inputValue("direction")}>
                      <option value="">Previous Direction:{direction}</option>
                      <option value="forward">Forward</option>
                      <option value="backward">Backward</option>
                    </select>
                  </h1>
                  <h1 head-block>Starting Time</h1>
                  <h1>
                    <select onChange={inputValue("dayStart")}>
                      <option value="">Previous Starting Day {dayStart}</option>
                      {optionsDay}
                    </select>
                  </h1>
                  <h1>
                    <select onChange={inputValue("hourStart")}>
                      <option value="">Previous Starting Hour {hourStart}</option>
                      {optionsHour}
                    </select>
                  </h1>
                  <h1>
                    <select onChange={inputValue("minuteStart")}>
                      <option value="">Previous Starting Minute {minuteStart}</option>
                      {optionsMinute}
                    </select>
                  </h1>
                  <h1 head-block>Ending Time</h1>
                  <h1>
                    <select onChange={inputValue("dayEnd")}>
                      <option value="">Previous Ending Day {dayEnd}</option>
                      {optionsDay}
                    </select>
                  </h1>
                  <h1>
                    <select onChange={inputValue("hourEnd")}>
                      <option value="">Previous Ending Hour {hourEnd}</option>
                      {optionsHour}
                    </select>
                  </h1>
                  <h1>
                    <select onChange={inputValue("minuteEnd")}>
                      <option value="">Previous Ending Minute {minuteEnd}</option>
                      {optionsMinute}
                    </select>
                  </h1>
                </div>
                <div className="col column-line command-actuator">
                  <input type="number" className="form-value" placeholder="Ratational Speed" value={speed} onChange={inputValue("speed")} />'
                  <div>
                    <button type="submit" className="form-submit">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <button className="return-btn">
            <HashLink smooth to={"/#list-timer"}>
              Back to command page
            </HashLink>
          </button>
        </div>
      </div>
    );
  };
  //   //กำหนดค่าให้state
  const inputValue = (name) => (event) => {
    // console.log(event.target.value)
    setState({ ...state, [name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API}/commandTimerDc/${commandId}`, {
        actuatorName,
        dayStart,
        hourStart,
        minuteStart,
        dayEnd,
        hourEnd,
        minuteEnd,
        speed,
        direction,
      })
      .then((response) => {
        Swal.fire("Congratulations", "Command successfully updated!", "success");
        //อัพเดทข้อมูลใหม่
        const { dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, direction, speed } = response.data;
        setState({ ...state, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, direction, speed });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.error,
        });
      });
  };

  return (
    <div className="edit-component">
      <NavbarComponent />
      {showUpdateForm()}
    </div>
  );
};

export default TimerDcEdit;
