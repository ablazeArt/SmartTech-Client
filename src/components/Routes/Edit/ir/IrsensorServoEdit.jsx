import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarComponent from "../../../NavbarComponent";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const IrsensorServoEdit = () => {
  const [state, setState] = useState({
    irsensorValue: "",
    degree: "",
    condition: "",
  });

  const { actuatorName, irsensorValue, degree, condition } = state;
  const { commandId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/commandIrsensorServo/${commandId}`)
      .then((response) => {
        //แยกข้อมูล
        const { irsensorValue, degree, condition } = response.data;
        //เก็บข้อมูลเดิม
        setState({ ...state, irsensorValue, degree, condition });
      })
      .catch((err) => console.log(err.response.data));
    // eslint-disable-next-line
  }, []);

  const showUpdateForm = () => {
    return (
      <div className="body-main">
        <div className="container" id="edit-irsensor-servo-display">
          <div className="head-edit">
            <h1>Edit Command</h1>
          </div>
          <div className="container text-center display-block main-block edit-block" style={{ paddingTop: "23px" }}>
            <form onSubmit={submitForm}>
              <div className="row align-items-start">
                <div className="col column-line command-actuator">
                  <h1 className="actuator-name-form">Servo Motor</h1>
                </div>
                <div className="col column-line command-actuator">
                  <h1>
                    <select onChange={inputValue("irsensorValue")}>
                      <option value="">Previous Irsensor Status:{irsensorValue}</option>
                      <option value="Detected">Detected</option>
                      <option value="Non-Detected">Non-Detected</option>
                    </select>
                  </h1>
                  <h1>
                    <select onChange={inputValue("degree")}>
                      <option value="">Previous Degree:{degree}</option>
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
                  <button type="submit" className="form-submit">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
          <button className="return-btn">
            <HashLink smooth to={"/#list-irsensor"}>
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
      .put(`${process.env.REACT_APP_API}/commandIrsensorServo/${commandId}`, {
        actuatorName,
        irsensorValue,
        degree,
        condition,
      })
      .then((response) => {
        Swal.fire("Congratulations", "Command successfully updated!", "success");
        //อัพเดทข้อมูลใหม่
        const { irsensorValue, degree, condition } = response.data;
        setState({ ...state, irsensorValue, degree, condition });
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

export default IrsensorServoEdit;
