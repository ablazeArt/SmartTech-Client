import "./App.css";
import "./components/css/styles.css";
import NavbarComponent from "./components/NavbarComponent";
import HomeComponent from "./components/home/HomeComponent";
import FormTempComponent from "./components/FormCommand/FormTemptCommand/FormTempComponent";
import Manual from "./components/Manual/Manual";
import TempCommand from "./components/commandSet/TempCommand";
import HumidityCommand from "./components/commandSet/HumidityCommand";
import FormHumidityComponent from "./components/FormCommand/FormHumidityCommand/FormHumidityComponent";
import Temp from "./components/sensor/Temp";
import Humidity from "./components/sensor/Humidity";
import FormIrsensorComponent from "./components/FormCommand/FormIrsensorCommand/FormIrsensorComponent";
import FormLevelComponent from "./components/FormCommand/FormLevelCommand/FormLevelComponent";
import FormLightComponent from "./components/FormCommand/FormLightCommand/FormLightComponent";
import LightCommand from "./components/commandSet/LightCommand";
import LevelCommand from "./components/commandSet/LevelCommand";
import IrsensorCommand from "./components/commandSet/IrsensorCommand";
import Irsensor from "./components/sensor/Irsensor";
import Light from "./components/sensor/Light";
import Level from "./components/sensor/Level";
import Camera from "./components/Camera/Camera";
import Timer from "./components/timer/Timer";
import ProfileImg from "./components/Account/ProfileImg";
import FormPinSensor from "./components/Pin/pinSensor/FormPinSensor";
import FormPinActuator from "./components/Pin/pinActuator/FormPinActuator";
import PinCommandSet from "./components/Pin/PinCommandSet";
import Pin from "./components/Pin/Pin";

function App() {
  return (
    <body className="body-main">
      <div className="body-component">
        <NavbarComponent />
        <HomeComponent />
        <Temp />
        <TempCommand />
        <FormTempComponent />
        <Humidity />
        <HumidityCommand />
        <FormHumidityComponent />
        <Light />
        <LightCommand />
        <FormLightComponent />
        <Irsensor />
        <IrsensorCommand />
        <FormIrsensorComponent />
        <Level />
        <LevelCommand />
        <FormLevelComponent />
        <Manual />
        <Timer />
        {/* <Pin /> */}
        <Camera />
      </div>
    </body>
  );
}

export default App;
