import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormPinSensor = () => {
  const [state, setState] = useState({
    ldr: "",
    level1: "",
    level2: "",
    level3: "",
    level4: "",
    ir: "",
  });

  const options = {
    ldr: ["36", "39", "34", "35", "32", "33"],
    level1: ["36", "39", "34", "35", "32", "33"],
    level2: ["36", "39", "34", "35", "32", "33"],
    level3: ["36", "39", "34", "35", "32", "33"],
    level4: ["36", "39", "34", "35", "32", "33"],
    ir: ["36", "39", "34", "35", "32", "33"],
  };

  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/createPinSensor`, state)
      .then((response) => {
        Swal.fire("Congratulations", "Command successfully added!", "success");
        setState({ ldr: "", level1: "", level2: "", level3: "", level4: "", ir: "" });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please provide the sensors pin and ensure that only one data entry is made.",
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

  const inputValue = (name) => (event) => {
    console.log(event.target.value);
    setState({ ...state, [name]: event.target.value });
  };

  const addId = () => {
    document.getElementById("commandIdPinSensor").value = crypto.randomUUID();
  };

  return (
    <div>
      <button class="d-block btn-display" id="button-From-PinSensor" onClick={displayBoxToggle}>
        {isShowDisplayBox ? "Show Select Sensors Pin" : "Hide Select Sensors Pin"}
      </button>

      <div className="container" id="pin-display1">
        <div className={`container text-center display-block main-block ${isShowDisplayBox ? "is-show" : "is-hidden"}`}>
          <h1 className="head-block">Sensors Pin</h1>
          <form onSubmit={submitForm}>
            <div className="row align-items-start command-form">
              <div className="col column-line command-actuator">
                <h1 head-block>Sensors Pin</h1>
              </div>
              <div className="col column-line command-actuator">
                <h1>
                  <select value={state.ldr} onChange={(e) => handleSelectChange("ldr", e.target.value)}>
                    <option value="">LDR Pin</option>
                    {renderOptions("ldr")}
                  </select>
                </h1>
                <h1>
                  <select value={state.level1} onChange={(e) => handleSelectChange("level1", e.target.value)}>
                    <option value="">LEVEL 1 Pin</option>
                    {renderOptions("level1")}
                  </select>
                </h1>
                <h1>
                  <select value={state.level2} onChange={(e) => handleSelectChange("level2", e.target.value)}>
                    <option value="">LEVEL 2 Pin</option>
                    {renderOptions("level2")}
                  </select>
                </h1>
                <h1>
                  <select value={state.level3} onChange={(e) => handleSelectChange("level3", e.target.value)}>
                    <option value="">LEVEL 3 Pin</option>
                    {renderOptions("level3")}
                  </select>
                </h1>
                <h1>
                  <select value={state.level4} onChange={(e) => handleSelectChange("level4", e.target.value)}>
                    <option value="">LEVEL 4 Pin</option>
                    {renderOptions("level4")}
                  </select>
                </h1>
                <h1>
                  <select value={state.ir} onChange={(e) => handleSelectChange("ir", e.target.value)}>
                    <option value="">IR Pin</option>
                    {renderOptions("ir")}
                  </select>
                </h1>
              </div>
              <div className="col column-line command-actuator">
                <button id="commandIdPinSensor" type="submit" value="" onMouseMove={addId} onClick={inputValue("commandId")} className="form-submit">
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

export default FormPinSensor;
