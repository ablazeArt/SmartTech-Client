import PinCommandSet from "./PinCommandSet";
import FormPinActuator from "./pinActuator/FormPinActuator";
import FormPinSensor from "./pinSensor/FormPinSensor";

const Pin = () => {
    return (
        <div id="pin">
            <h1 className="head-title">Pin Select</h1>
            <PinCommandSet />
            <FormPinSensor />
            <FormPinActuator />
        </div>
    )
}

export default Pin; 