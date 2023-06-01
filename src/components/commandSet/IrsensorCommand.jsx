import { useState } from "react";
import IrsensorServo from "../command/irsensor/IrsensorServo";
import IrsensorDc from "../command/irsensor/IrsensorDc";
import IrsensorLed from "../command/irsensor/IrsensorLed";
import IrsensorSolenoid from "../command/irsensor/IrsensorSolenoid";
import IrsensorBuzzer from "../command/irsensor/IrsensorBuzzer";

const IrsensorCommand = () => {
  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };
  return (
    <div>
      <button class="d-block btn-display" id="button-commandlist-irsensor" onClick={displayBoxToggle}>
        {isShowDisplayBox ? "Hide Commands List" : "Show Commands List"}
      </button>

      <div className="container" id="list-irsensor">
        <div className={`container text-center display-block main-block ${isShowDisplayBox ? "is-show" : "is-hidden"}`}>
          <div className="row align-items-start">
            <div className="col-12 column-line">
              <h1 className="head-block">Command List</h1>
            </div>
            <h1 className="actuator-head-command">Servo Command</h1>
            <IrsensorServo />
            <h1 className="actuator-head-command">Dc Command</h1>
            <IrsensorDc />
            <h1 className="actuator-head-command">Led Command</h1>
            <IrsensorLed />
            <h1 className="actuator-head-command">Solenoid Command</h1>
            <IrsensorSolenoid />
            <h1 className="actuator-head-command">Buzzer Command</h1>
            <IrsensorBuzzer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrsensorCommand;
