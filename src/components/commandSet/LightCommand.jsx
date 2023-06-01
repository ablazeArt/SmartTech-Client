import { useState } from "react";
import LightServo from "../command/light/LightServo";
import LightDc from "../command/light/LightDc";
import LightLed from "../command/light/LightLed";
import LightSolenoid from "../command/light/LightSolenoid";
import LightBuzzer from "../command/light/LightBuzzer";

const LightCommand = () => {
  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };
  return (
    <div>
      <button class="d-block btn-display" id="button-commandlist-light" onClick={displayBoxToggle}>
        {isShowDisplayBox ? "Hide Commands List" : "Show Commands List"}
      </button>

      <div className="container" id="list-light">
        <div className={`container text-center display-block main-block ${isShowDisplayBox ? "is-show" : "is-hidden"}`}>
          <div className="row align-items-start">
            <div className="col-12 column-line">
              <h1 className="head-block">Command List</h1>
            </div>
            <h1 className="actuator-head-command">Servo Command</h1>
            <LightServo />
            <h1 className="actuator-head-command">Dc Command</h1>
            <LightDc />
            <h1 className="actuator-head-command">Led Command</h1>
            <LightLed />
            <h1 className="actuator-head-command">Solenoid Command</h1>
            <LightSolenoid />
            <h1 className="actuator-head-command">Buzzer Command</h1>
            <LightBuzzer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightCommand;
