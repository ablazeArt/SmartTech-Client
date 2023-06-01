import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormPinActuator = () => {
  const [state, setState] = useState({
    led: "",
    buzzer: "",
    solenoid: "",
    servo: "",
    dc1: "",
    dc2: "",
    dc3: "",
  });

  const options = {
    led: ["25", "26", "27", "14", "12", "13", "0", "15", "2", "4"],
    buzzer: ["25", "26", "27", "14", "12", "13", "0", "15", "2", "4"],
    solenoid: ["25", "26", "27", "14", "12", "13", "0", "15", "2", "4"],
    servo: ["25", "26", "27", "14", "12", "13", "15", "2", "4"],
    dc1: ["25", "26", "27", "14", "12", "13", "0", "15", "2", "4"],
    dc2: ["25", "26", "27", "14", "12", "13", "0", "15", "2", "4"],
    dc3: ["25", "26", "27", "14", "12", "13", "15", "2", "4"],
  };

  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/createPinActuator`, state)
      .then((response) => {
        Swal.fire("Congratulations", "Command successfully added!", "success");
        setState({ led: "", buzzer: "", solenoid: "", servo: "", dc1: "", dc2: "", dc3: "" });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please provide the actuators pin and ensure that only one data entry is made.",
        });
      });
    setTimeout(function () {
      window.location.reload();
    }, 1300);
  };

  const handleSelectChange = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderOptions = (name) => {
    const selectedValues = Object.values(state).filter((value) => value !== "" && value !== state[name]);
    return options[name]
      .filter((option) => !selectedValues.includes(option))
      .map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ));
  };

  //กำหนดค่าให้state
  const inputValue = (name) => (event) => {
    console.log(event.target.value);
    setState({ ...state, [name]: event.target.value });
  };

  const addId = () => {
    document.getElementById("commandIdPinActuator").value = crypto.randomUUID();
  };

  return (
    <div>
      <button class="d-block btn-display" id="button-From-PinActuator" onClick={displayBoxToggle}>
        {isShowDisplayBox ? "Show Select Actuators Pin" : "Hide Select Actuators Pin"}
      </button>

      <div className="container" id="pin-display2">
        <div className={`container text-center display-block main-block ${isShowDisplayBox ? "is-show" : "is-hidden"}`}>
          <h1 className="head-block">Actuator Pin</h1>
          <form onSubmit={submitForm}>
            <div className="row align-items-start command-form">
              <div className="col column-line command-actuator">
                <h1 className="actuator-name-form">Actuator Pin</h1>
              </div>
              <div className="col column-line command-actuator">
                <h1>
                  <select value={state.ldr} onChange={(e) => handleSelectChange("led", e.target.value)}>
                    <option value="">LED Pin</option>
                    {renderOptions("led")}
                  </select>
                </h1>
                <h1>
                  <select value={state.level1} onChange={(e) => handleSelectChange("buzzer", e.target.value)}>
                    <option value="">Buzzer Pin</option>
                    {renderOptions("buzzer")}
                  </select>
                </h1>
                <h1>
                  <select value={state.level2} onChange={(e) => handleSelectChange("solenoid", e.target.value)}>
                    <option value="">Solenoid Pin</option>
                    {renderOptions("solenoid")}
                  </select>
                </h1>
                <h1>
                  <select value={state.level3} onChange={(e) => handleSelectChange("servo", e.target.value)}>
                    <option value="">Servo Pin</option>
                    {renderOptions("servo")}
                  </select>
                </h1>
                <h1>
                  <select value={state.level4} onChange={(e) => handleSelectChange("dc1", e.target.value)}>
                    <option value="">DC Motor1 Pin</option>
                    {renderOptions("dc1")}
                  </select>
                </h1>
                <h1>
                  <select value={state.ir} onChange={(e) => handleSelectChange("dc2", e.target.value)}>
                    <option value="">DC Motor2 Pin</option>
                    {renderOptions("dc2")}
                  </select>
                </h1>
                <h1>
                  <select value={state.ir} onChange={(e) => handleSelectChange("dc3", e.target.value)}>
                    <option value="">DC Motor3 Pin</option>
                    {renderOptions("dc3")}
                  </select>
                </h1>
              </div>
              <div className="col column-line command-actuator">
                <button id="commandIdPinActuator" type="submit" value="" onMouseMove={addId} onClick={inputValue("commandId")} className="form-submit">
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

export default FormPinActuator;
