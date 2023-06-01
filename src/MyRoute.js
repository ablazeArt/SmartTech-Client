import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Routes/Login/Login";

import TempLedEdit from "./components/Routes/Edit/temp/TempLedEdit";
import TempServoEdit from "./components/Routes/Edit/temp/TempServoEdit";
import TempDcEdit from "./components/Routes/Edit/temp/TempDcEdit";
import TempSolenoidEdit from "./components/Routes/Edit/temp/TempSolenoidEdit";
import TempBuzzerEdit from "./components/Routes/Edit/temp/TempBuzzerEdit";

import HumidityServoEdit from "./components/Routes/Edit/humidity/HumidityServoEdit";
import HumidityDcEdit from "./components/Routes/Edit/humidity/HumidityDcEdit";
import HumidityLedEdit from "./components/Routes/Edit/humidity/HumidityLedEdit";
import HumiditySolenoidEdit from "./components/Routes/Edit/humidity/HumiditySolenoidEdit";
import HumidityBuzzerEdit from "./components/Routes/Edit/humidity/HumidityBuzzerEdit";
import LevelServoEdit from "./components/Routes/Edit/level/LevelServoEdit";
import LevelDcEdit from "./components/Routes/Edit/level/LevelDcEdit";
import LevelLedEdit from "./components/Routes/Edit/level/LevelLedEdit";
import LevelSolenoidEdit from "./components/Routes/Edit/level/LevelSolenoidEdit";
import LevelBuzzerEdit from "./components/Routes/Edit/level/LevelBuzzerEdit";
import IrsensorServoEdit from "./components/Routes/Edit/ir/IrsensorServoEdit";
import IrsensorDcEdit from "./components/Routes/Edit/ir/IrsensorDcEdit";
import IrsensorLedEdit from "./components/Routes/Edit/ir/IrsensorLedEdit";
import IrsensorSolenoidEdit from "./components/Routes/Edit/ir/IrsensorSolenoidEdit";
import IrsensorBuzzerEdit from "./components/Routes/Edit/ir/IrsensorBuzzerEdit";
import LightServoEdit from "./components/Routes/Edit/light/LightServoEdit";
import LightDcEdit from "./components/Routes/Edit/light/LightDcEdit";
import LightLedEdit from "./components/Routes/Edit/light/LightLedEdit";
import LightSolenoidEdit from "./components/Routes/Edit/light/LightSolenoidEdit";
import LightBuzzerEdit from "./components/Routes/Edit/light/LightBuzzerEdit";
import TimerServoEdit from "./components/Routes/Edit/timer/TimerServoEdit";
import TimerDcEdit from "./components/Routes/Edit/timer/TimerDcEdit";
import TimerLedEdit from "./components/Routes/Edit/timer/TimerLedEdit";
import TimerSolenoidEdit from "./components/Routes/Edit/timer/TimerSolenoidEdit";
import TimerBuzzerEdit from "./components/Routes/Edit/timer/TimerBuzzerEdit";
import Register from "./components/Routes/Login/Register";
import { useState } from "react";
import Username from "./components/Account/UsernameContent";
import ProfileImg from "./components/Account/ProfileImg";

const MyRoute = () => {
  const [user, setLoginUser] = useState({});
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/" element={user && user._id ? <Login setLoginUser={setLoginUser}/> : <App /> } />
        <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/Register" element={<Register />} /> */}

        <Route path="/account/updateUsername" element={<Username />} />
        <Route path="/account/updateProfileImg" element={<ProfileImg />} />
    
        <Route path="/commandTempServo/edit/:commandId" element={<TempServoEdit />} />
        <Route path="/commandTempDc/edit/:commandId" element={<TempDcEdit />} />
        <Route path="/commandTempLed/edit/:commandId" element={<TempLedEdit />} />
        <Route path="/commandTempSolenoid/edit/:commandId" element={<TempSolenoidEdit />} />
        <Route path="/commandTempBuzzer/edit/:commandId" element={<TempBuzzerEdit />} />

        <Route path="/commandHumidityServo/edit/:commandId" element={<HumidityServoEdit />} />
        <Route path="/commandHumidityDc/edit/:commandId" element={<HumidityDcEdit />} />
        <Route path="/commandHumidityLed/edit/:commandId" element={<HumidityLedEdit />} />
        <Route path="/commandHumiditySolenoid/edit/:commandId" element={<HumiditySolenoidEdit />} />
        <Route path="/commandHumidityBuzzer/edit/:commandId" element={<HumidityBuzzerEdit />} />

        <Route path="/commandLightServo/edit/:commandId" element={<LightServoEdit />} />
        <Route path="/commandLightDc/edit/:commandId" element={<LightDcEdit />} />
        <Route path="/commandLightLed/edit/:commandId" element={<LightLedEdit />} />
        <Route path="/commandLightSolenoid/edit/:commandId" element={<LightSolenoidEdit />} />
        <Route path="/commandLightBuzzer/edit/:commandId" element={<LightBuzzerEdit />} />

        <Route path="/commandIrsensorServo/edit/:commandId" element={<IrsensorServoEdit />} />
        <Route path="/commandIrsensorDc/edit/:commandId" element={<IrsensorDcEdit />} />
        <Route path="/commandIrsensorLed/edit/:commandId" element={<IrsensorLedEdit />} />
        <Route path="/commandIrsensorSolenoid/edit/:commandId" element={<IrsensorSolenoidEdit />} />
        <Route path="/commandIrsensorBuzzer/edit/:commandId" element={<IrsensorBuzzerEdit />} />

        <Route path="/commandLevelServo/edit/:commandId" element={<LevelServoEdit />} />
        <Route path="/commandLevelDc/edit/:commandId" element={<LevelDcEdit />} />
        <Route path="/commandLevelLed/edit/:commandId" element={<LevelLedEdit />} />
        <Route path="/commandLevelSolenoid/edit/:commandId" element={<LevelSolenoidEdit />} />
        <Route path="/commandLevelBuzzer/edit/:commandId" element={<LevelBuzzerEdit />} />

        <Route path="/commandTimerServo/edit/:commandId" element={<TimerServoEdit />} />
        <Route path="/commandTimerDc/edit/:commandId" element={<TimerDcEdit />} />
        <Route path="/commandTimerLed/edit/:commandId" element={<TimerLedEdit />} />
        <Route path="/commandTimerSolenoid/edit/:commandId" element={<TimerSolenoidEdit />} />
        <Route path="/commandTimerBuzzer/edit/:commandId" element={<TimerBuzzerEdit />} />
      </Routes>
    </Router>
  );
};

export default MyRoute;
