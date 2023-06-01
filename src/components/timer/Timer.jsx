import FormTimerBuzzer from "./FormTimerCommand/FormTimerBuzzer";
import FormTimerDc from "./FormTimerCommand/FormTimerDc";
import FormTimerLed from "./FormTimerCommand/FormTimerLed";
import FormTimerServo from "./FormTimerCommand/FormTimerServo";
import FormTimerSolenoid from "./FormTimerCommand/FormTimerSolenoid";
import FormTimerComponent from "./FormTimerComponent";
import TimerCommandSet from "./TimerCommandSet";

const Timer = () => {
    return (
        <div id="timer">
            <h1 className="head-title">Timer Command</h1>
            <TimerCommandSet />
            <FormTimerComponent />
        </div>
    )
}

export default Timer; 