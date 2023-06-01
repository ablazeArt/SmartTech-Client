import { useState } from "react";
import PinSensorCommand from "./pinCommand/PinSensorCommand";
import PinActuatorCommand from "./pinCommand/PinActuatorCommand";

const PinCommandSet = () => {
  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };
  return (
    <div>
      <button class="d-block btn-display" id="button-commandlist-temp" onClick={displayBoxToggle}>
        {isShowDisplayBox ? "Show Pin List" : "Hide Pin List"}
      </button>

      <div className="container" id="list-manual">
        <div className={`container text-center display-block main-block ${isShowDisplayBox ? "is-show" : "is-hidden"}`}>
          <div className="row align-items-start">
            <div className="col-12 column-line">
              <h1 className="head-block">Pin List</h1>
            </div>
            <h1 className="actuator-head-command">Sensor Pin</h1>
            <PinSensorCommand />
            <h1 className="actuator-head-command">Actuator Pin</h1>
            <PinActuatorCommand />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinCommandSet;
