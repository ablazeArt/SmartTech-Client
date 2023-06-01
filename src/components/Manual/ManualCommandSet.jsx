import { useState } from "react";
import ManualDcCommand from "./ManualCommand/ManualDcCommand";
import ManualServoCommand from "./ManualCommand/ManualServoCommand";
import ManualLedCommand from "./ManualCommand/ManualLedCommand";
import ManualSolenoidCommand from "./ManualCommand/ManualSolenoidCommand";
import ManualBuzzerCommand from "./ManualCommand/ManualBuzzerCommand";


const ManualCommandSet = () => {
  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };
  return (
    <div>
      <button class="d-block btn-display" id="button-commandlist-temp" onClick={displayBoxToggle}>
        {isShowDisplayBox ? "Show Commands List" : "Hide Commands List"}
      </button>

      <div className="container" id="list-manual">
        <div className={`container text-center display-block main-block ${isShowDisplayBox ? "is-show" : "is-hidden"}`}>
          <div className="row align-items-start">
            <div className="col-12 column-line">
              <h1 className="head-block">Command List</h1>
            </div>
            <ManualDcCommand />
            <ManualServoCommand />
            <ManualLedCommand />
            <ManualSolenoidCommand />
            <ManualBuzzerCommand />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualCommandSet;
