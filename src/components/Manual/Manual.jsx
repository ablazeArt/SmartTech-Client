import FormManualBuzzer from "./FormManualCommand/FormManualBuzzer";
import FormManualDc from "./FormManualCommand/FormManualDc";
import FormManualLed from "./FormManualCommand/FormManualLed";
import FormManualServo from "./FormManualCommand/FormManualServo";
import FormManualSolenoid from "./FormManualCommand/FormManualSolenoid";
import FormManualComponent from "./FormManualComponent";
import ManualCommandSet from "./ManualCommandSet";

const Manual = () => {
    return (
        <div id="manual">
            <h1 className="head-title">Manual Command</h1>
            <ManualCommandSet />
            <FormManualComponent />
        </div>
    )
}

export default Manual; 