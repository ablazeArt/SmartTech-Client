import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarComponent from "../../../NavbarComponent";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HumidityDcEdit = () => {
  const [state, setState] = useState({
    humidityValue: "",
    direction: "",
    speed: "",
    condition: "",
  });

  const { actuatorName, humidityValue, direction, speed, condition } = state;
  const { commandId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/commandHumidityDc/${commandId}`)
      .then((response) => {
        //แยกข้อมูล
        const { humidityValue, direction, speed, condition } = response.data;
        //เก็บข้อมูลเดิม
        setState({ ...state, humidityValue, direction, speed, condition });
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
                  <h1 head-block>Dc Motor</h1>
                </div>
                <div className="col column-line command-actuator">
                  <h1 className="form-command-head-value">Desired Humidity</h1>
                  <h1 className="form-command-head-value value-command">Speed</h1>
                  <h1>
                    <select onChange={inputValue("condition")}>
                      <option value="">Previous Condition:{condition}</option>
                      <option value="greater">Greater</option>
                      <option value="lesser">Lesser</option>
                    </select>
                  </h1>
                  <h1>
                    <select onChange={inputValue("direction")}>
                      <option value="">Previous Direction:{direction}</option>
                      <option value="forward">Forward</option>
                      <option value="backward">Backward</option>
                    </select>
                  </h1>
                </div>
                <div className="col column-line command-actuator">
                  <input type="number" className="form-value" placeholder="Desired Humidity" value={humidityValue} onChange={inputValue("humidityValue")} />
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
      .put(`${process.env.REACT_APP_API}/commandHumidityDc/${commandId}`, {
        actuatorName,
        humidityValue,
        speed,
        direction,
        condition,
      })
      .then((response) => {
        Swal.fire("Congratulations", "Command successfully updated!", "success");
        //อัพเดทข้อมูลใหม่
        const { humidityValue, direction, speed, condition } = response.data;
        setState({ ...state, humidityValue, direction, speed, condition });
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

export default HumidityDcEdit;
