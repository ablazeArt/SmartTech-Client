import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormTempLed = () => {
  const [state, setState] = useState({
    tempValue: "",
    status: "",
    condition: ""
  });
  const { actuatorName, tempValue, status, condition, commandId } = state;
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/createTempLed`, { actuatorName, tempValue, status, condition, commandId })
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
    setState({ ...state, actuatorName: "LED" });
  }, []);

  const addId = () => {
    document.getElementById("commandIdTempLed").value = crypto.randomUUID();
  };

  return (
    <div>
      <div className="container" id="condition-temp-actuator-display3">
        <div className="container text-center display-block main-block">
          <h1 className="head-block">Command</h1>
          <form onSubmit={submitForm}>
            <div className="row align-items-start command-form">
              <div className="col column-line command-actuator">
                <h1 className="actuator-name-form">LED</h1>
              </div>
              <div className="col column-line command-actuator">
                <h1 className="form-command-head-value">Desired Temperature</h1>
                <h1>
                  <select onChange={inputValue("condition")}>
                    <option value="">Condition</option>
                    <option value="greater">Greater</option>
                    <option value="lesser">Lesser</option>
                  </select>
                </h1>
                <h1>
                  <select onChange={inputValue("status")}>
                    <option value="">Status</option>
                    <option value="on">ON</option>
                    <option value="off">OFF</option>
                  </select>
                </h1>
              </div>
              <div className="col column-line command-actuator">
                <input type="number" className="form-value" placeholder="Desired Temperature" value={tempValue} onChange={inputValue("tempValue")} />
                <button id="commandIdTempLed" type="submit" value="" onMouseMove={addId} onClick={inputValue("commandId")} className="form-submit">
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

export default FormTempLed;
