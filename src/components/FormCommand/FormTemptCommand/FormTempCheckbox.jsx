import { useState } from "react";

const FormTempCheckbox = () => {
  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };
  return (
    <div>
      <button class="d-block btn-display" id="button-command-temp" onClick={displayBoxToggle}>
        Manage Commands
      </button>

      <div class="container" id="select-display-command-temp">
        <div class={`container text-center display-block ${isShowDisplayBox ? "is-show" : "is-hidden"}`}>
          <div class="row align-items-start">
            <div class="col-12">
              <h1 class="head-block">Actuator</h1>
            </div>
            <div class="col">
              <div class="display-checkbox">
                <p>Servo Motor</p>
              </div>
              <div class="display-checkbox">
                <p>DC Motor</p>
              </div>
              <div class="display-checkbox">
                <p>LED RGB</p>
              </div>
              <div class="display-checkbox">
                <p>Solinoid Valve</p>
              </div>
              <div class="display-checkbox">
                <p>Buzzer</p>
              </div>
            </div>
            <div class="col">
              <div class="display-checkbox">
                <input id="condition-temp-actuator-checkbox1" type="checkbox" class="checkbox checkbox-actuator" />
              </div>
              <div class="display-checkbox">
                <input id="condition-temp-actuator-checkbox2" type="checkbox" class="checkbox checkbox-actuator" />
              </div>
              <div class="display-checkbox">
                <input id="condition-temp-actuator-checkbox3" type="checkbox" class="checkbox checkbox-actuator" />
              </div>
              <div class="display-checkbox">
                <input id="condition-temp-actuator-checkbox4" type="checkbox" class="checkbox checkbox-actuator" />
              </div>
              <div class="display-checkbox">
                <input id="condition-temp-actuator-checkbox5" type="checkbox" class="checkbox checkbox-actuator" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTempCheckbox;
