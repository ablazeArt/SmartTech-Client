import { useState } from "react";
import TimerDcCommand from "./TimerCommand/TimerDcCommand";
import TimerServoCommand from "./TimerCommand/TimerServoCommand";
import TimerLedCommand from "./TimerCommand/TimerLedCommand";
import TimerSolenoidCommand from "./TimerCommand/TimerSolenoidCommand";
import TimerBuzzerCommand from "./TimerCommand/TimerBuzzerCommand";


const TimerCommandSet = () => {
  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };
  return (
    <div>
      <button class="d-block btn-display" id="button-commandlist-temp" onClick={displayBoxToggle}>
        {isShowDisplayBox ? "Show Commands List" : "Hide Commands List"}
      </button>

      <div className="container" id="list-timer">
        <div className={`container text-center display-block main-block ${isShowDisplayBox ? "is-show" : "is-hidden"}`}>
          <div className="row align-items-start">
            <div className="col-12 column-line">
              <h1 className="head-block">Command List</h1>
            </div>
            <TimerDcCommand />
            <TimerServoCommand />
            <TimerLedCommand />
            <TimerSolenoidCommand />
            <TimerBuzzerCommand />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerCommandSet;
