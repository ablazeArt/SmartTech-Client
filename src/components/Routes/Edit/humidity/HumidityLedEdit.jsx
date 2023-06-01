import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarComponent from "../../../NavbarComponent";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HumidityLedEdit = () => {
  const [state, setState] = useState({
    humidityValue: "",
    status: "",
    condition: ""
  });

  const { actuatorName, humidityValue, status, condition } = state;
  const { commandId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/commandHumidityLed/${commandId}`)
      .then((response) => {
        //แยกข้อมูล
        const { humidityValue, status, condition } = response.data;
        //เก็บข้อมูลเดิม
        setState({ ...state, humidityValue, status, condition });
      })
      .catch((err) => console.log(err.response.data));
    // eslint-disable-next-line
  }, []);

  const showUpdateForm = () => {
    return (
      <div className="body-main">
        <div className="container" id="edit-humidity-servo-display">
          <div className="head-edit">
            <h1>Edit Command</h1>
          </div>
          <div className="container text-center display-block main-block edit-block" style={{ paddingTop: "23px" }}>
            <form onSubmit={submitForm}>
              <div className="row align-items-start">
                <div className="col column-line command-actuator">
                  <h1 head-block>LED</h1>
                </div>
                <div className="col column-line command-actuator">
                  <h1 className="form-command-head-value">Desired Humidity</h1>
                  <h1>
                    <select onChange={inputValue("condition")}>
                      <option value="">Previous Condition:{condition}</option>
                      <option value="greater">Greater</option>
                      <option value="lesser">Lesser</option>
                    </select>
                  </h1>
                  <h1>
                    <select onChange={inputValue("status")}>
                      <option value="">Previous Status:{status}</option>
                      <option value="on">ON</option>
                      <option value="off">OFF</option>
                    </select>
                  </h1>
                </div>
                <div className="col column-line command-actuator">
                  <input type="number" className="form-value" placeholder="ระบุอุณหภูมิ" value={humidityValue} onChange={inputValue("humidityValue")} />
                  <button type="submit" className="form-submit">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
          <button className="return-btn">
            <HashLink smooth to={"/#list-humidity"}>
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
      .put(`${process.env.REACT_APP_API}/commandHumidityLed/${commandId}`, {
        actuatorName,
        humidityValue,
        status,
        condition
      })
      .then((response) => {
        Swal.fire("Congratulations", "Command successfully updated!", "success");
        //อัพเดทข้อมูลใหม่
        const { humidityValue, status, condition } = response.data;
        setState({ ...state, humidityValue, status, condition });
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

export default HumidityLedEdit;
