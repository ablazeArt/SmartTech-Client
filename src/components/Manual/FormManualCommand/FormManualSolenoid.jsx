import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormManualSolenoid = () => {
  const [state, setState] = useState({
    tempValue: "",
    status: "",
    condition: ""
  });
  const { actuatorName, status, commandId } = state;
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/createManualSolenoid`, { actuatorName, status, commandId })
      .then((response) => {
        Swal.fire("Congratulations", "Command successfully added!", "success");
        setState({ ...state, value: "" });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please provide the actuator status and ensure that only one data entry is made."
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
    setState({ ...state, actuatorName: "Solenoid" });
  }, []);

  const addId = () => {
    document.getElementById("commandIdManualSolenoid").value = crypto.randomUUID();
  };

  return (
    <div>
      <div className="container" id="manual-actuator-display4">
        <div className="container text-center display-block main-block">
          <h1 className="head-block">Command</h1>
          <form onSubmit={submitForm}>
            <div className="row align-items-start command-form">
              <div className="col column-line command-actuator">
                <h1 className="actuator-name-form">Solenoid</h1>
              </div>
              <div className="col column-line command-actuator">
                <h1>
                  <select onChange={inputValue("status")}>
                    <option value="">Status</option>
                    <option value="on">ON</option>
                    <option value="off">OFF</option>
                  </select>
                </h1>
              </div>
              <div className="col column-line command-actuator">
                <button id="commandIdManualSolenoid" type="submit" value="" onMouseMove={addId} onClick={inputValue("commandId")} className="form-submit">
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

export default FormManualSolenoid;
