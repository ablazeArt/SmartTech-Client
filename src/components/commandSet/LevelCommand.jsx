import { useState } from "react";
import LevelServo from "../command/level/LevelServo";
import LevelDc from "../command/level/LevelDc";
import LevelLed from "../command/level/LevelLed";
import LevelSolenoid from "../command/level/LevelSolenoid";
import LevelBuzzer from "../command/level/LevelBuzzer";

const LevelCommand = () => {
  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };
  return (
    <div>
      <button class="d-block btn-display" id="button-commandlist-level" onClick={displayBoxToggle}>
        {isShowDisplayBox ? "Hide Commands List" : "Show Commands List"}
      </button>

      <div className="container" id="list-level">
        <div className={`container text-center display-block main-block ${isShowDisplayBox ? "is-show" : "is-hidden"}`}>
          <div className="row align-items-start">
            <div className="col-12 column-line">
              <h1 className="head-block">Command List</h1>
            </div>
            <h1 className="actuator-head-command">Servo Command</h1>
            <LevelServo />
            <h1 className="actuator-head-command">Dc Command</h1>
            <LevelDc />
            <h1 className="actuator-head-command">Led Command</h1>
            <LevelLed />
            <h1 className="actuator-head-command">Solenoid Command</h1>
            <LevelSolenoid />
            <h1 className="actuator-head-command">Buzzer Command</h1>
            <LevelBuzzer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelCommand;
