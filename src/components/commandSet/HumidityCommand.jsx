import { useState } from "react";
import HumidityServo from "../command/humidity/HumidityServo";
import HumidityDc from "../command/humidity/HumidityDc";
import HumidityLed from "../command/humidity/HumidityLed";
import HumiditySolenoid from "../command/humidity/HumiditySolenoid";
import HumidityBuzzer from "../command/humidity/HumidityBuzzer";

const HumidityCommand = () => {
  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };
  return (
    <div>
      <button class="d-block btn-display" id="button-commandlist-humidity" onClick={displayBoxToggle}>
        {isShowDisplayBox ? "Hide Commands List" : "Show Commands List"}
      </button>

      <div className="container" id="list-humidity">
        <div className={`container text-center display-block main-block ${isShowDisplayBox ? "is-show" : "is-hidden"}`}>
          <div className="row align-items-start">
            <div className="col-12 column-line">
              <h1 className="head-block">Command List</h1>
            </div>
            <h1 className="actuator-head-command">Servo Command</h1>
            <HumidityServo />
            <h1 className="actuator-head-command">Dc Command</h1>
            <HumidityDc />
            <h1 className="actuator-head-command">Led Command</h1>
            <HumidityLed />
            <h1 className="actuator-head-command">Solenoid Command</h1>
            <HumiditySolenoid />
            <h1 className="actuator-head-command">Buzzer Command</h1>
            <HumidityBuzzer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumidityCommand;
