import { useState } from "react";
import TempServo from "../command/temp/TempServo";
import TempDc from "../command/temp/TempDc";
import TempLed from "../command/temp/TempLed";
import TempSolenoid from "../command/temp/TempSolenoid";
import TempBuzzer from "../command/temp/TempBuzzer";

const TempCommand = () => {
  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };
  return (
    <div>
      <button class="d-block btn-display" id="button-commandlist-temp" onClick={displayBoxToggle}>
        {isShowDisplayBox ? "Hide Commands List" : "Show Commands List"}
      </button>

      <div className="container" id="list-temp">
        <div className={`container text-center display-block main-block ${isShowDisplayBox ? "is-show" : "is-hidden"}`}>
          <div className="row align-items-start">
            <div className="col-12 column-line">
              <h1 className="head-block">Command List</h1>
            </div>
            <h1 className="actuator-head-command">Servo Command</h1>
            <TempServo />
            <h1 className="actuator-head-command">Dc Command</h1>
            <TempDc />
            <h1 className="actuator-head-command">Led Command</h1>
            <TempLed />
            <h1 className="actuator-head-command">Solenoid Command</h1>
            <TempSolenoid />
            <h1 className="actuator-head-command">Buzzer Command</h1>
            <TempBuzzer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempCommand;
