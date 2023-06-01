import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarComponent from "../../../NavbarComponent";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const IrsensorDcEdit = () => {
  const [state, setState] = useState({
    irsensorValue: "",
    direction: "",
    speed: "",
    condition: "",
  });

  const { actuatorName, irsensorValue, direction, speed, condition } = state;
  const { commandId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/commandIrsensorDc/${commandId}`)
      .then((response) => {
        //แยกข้อมูล
        const { irsensorValue, direction, speed, condition } = response.data;
        //เก็บข้อมูลเดิม
        setState({ ...state, irsensorValue, direction, speed, condition });
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
                  <h1 head-block>Dc Motor</h1>
                </div>
                <div className="col column-line command-actuator">
                  <h1>
                    <select onChange={inputValue("irsensorValue")}>
                      <option value="">Previous Irsensor Status:{irsensorValue}</option>
                      <option value="Detected">Detected</option>
                      <option value="Non-Detected">Non-Detected</option>
                    </select>
                  </h1>
                  <h1 className="form-command-head-value value-command">Speed</h1>
                  <h1>
                    <select onChange={inputValue("direction")}>
                      <option value="">Previous Direction:{direction}</option>
                      <option value="forward">Forward</option>
                      <option value="backward">Backward</option>
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
      .put(`${process.env.REACT_APP_API}/commandIrsensorDc/${commandId}`, {
        actuatorName,
        irsensorValue,
        speed,
        direction,
        condition,
      })
      .then((response) => {
        Swal.fire("Congratulations", "Command successfully updated!", "success");
        //อัพเดทข้อมูลใหม่
        const { irsensorValue, direction, speed, condition } = response.data;
        setState({ ...state, irsensorValue, direction, speed, condition });
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

export default IrsensorDcEdit;
