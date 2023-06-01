import $ from "jquery";
import { useEffect } from "react";
import HomeCheckbox from "./HomeCheckbox";
import HomeDisplay from "./HomeDisplay";
import HomeTop from "./HomeTop";

const HomeComponent = () => {
  //เวลาเรียลไทม์
  function display_time() {
    const d = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    let text = d.toLocaleString(undefined, options);
    document.getElementById("time").innerHTML = text;
  }

  //ใช้ class object ในการรับค่าสถานะการแสดงBlock
  class CheckBoxDisplay {
    constructor(name, checkBoxName, displayName) {
      this.name = name;
      this.checkBoxName = checkBoxName;
      this.displayName = displayName;
    }

    BlockDisplay() {
      // actuator display home
      let name = this.name;
      let showing;
      let checkBoxName = this.checkBoxName;
      let displayName = this.displayName;
      //เลือกเอาCheckboxทั้งหมด
      const checkBox = document.querySelectorAll(`[id^=${checkBoxName}]`);
      //arrayไว้เก็บตัวCheckbox
      const elements = [];
      const storage = localStorage.getItem("storage" + name);
      showing = JSON.parse(storage || "null");
      //ถ้าไม่มีข้อมูลcheckboxเก็บไว้ให้ไม่โชว์อะไรเลย
      if (!showing) {
        showing = {};
        for (let i = 1; i <= checkBox.length; i++) {
          showing["typeBlockDisplay" + i] = false;
        }
        let idDiv = 1;
        for (const [key, value] of Object.entries(showing)) {
          showBox(idDiv, value, checkBoxName);
          idDiv++;
        }
      }
      //ถ้ามีข้อมูลเก็บcheckboxไว้ให้โชว์ข้อมูลActuatorที่จำไว้
      else {
        let idDiv = 1;
        for (const [key, value] of Object.entries(showing)) {
          showBox(idDiv, value, checkBoxName);
          idDiv++;
        }
      }

      //ใส่function cbclickไว้สำหรับการcheckbox
      for (let i = 0; i < checkBox.length; i++) {
        let j = i + 1;
        elements[i] = document.getElementById(checkBoxName + j).addEventListener("click", cbclicked);
      }

      function cbclicked() {
        let num = this.id.replace(/\D/g, "");
        let thisBlockDisplay = "typeBlockDisplay" + num;
        //ทำให้CheckBoxได้ เป็นการส่งค่าตรงข้าม ถ้า showing true อยู่จะเป็นเป็น false and vice versa จาก (x = !x) คือการสลับlogic
        showing[thisBlockDisplay] = !showing[thisBlockDisplay];
        showBox(num, showing[thisBlockDisplay], checkBoxName);
        //เก็บค่าเข้าlocalStorage.show
        localStorage.setItem("storage" + name, JSON.stringify(showing));
      }

      function showBox(num, flag, checkBoxName1) {
        document.getElementById(checkBoxName1 + num).checked = flag;
        document.getElementById(displayName + num).style.display =
          // (condition) ? (if true, do this) : (otherwise, do this)
          flag ? "block" : "none";
      }
    }
  }

  //เรียกใช้object function ให้actuator
  const actuatorDisplayBlock = new CheckBoxDisplay("actuatorHome", "home-actuator-checkbox", "home-actuator-display");
  //เรียกใช้object function ให้sensor
  const sensorDisplayBlock = new CheckBoxDisplay("sensorHome", "home-sensor-checkbox", "home-sensor-display");

  //เรียกใช้งานfunction display
  function displayCheckBox() {
    actuatorDisplayBlock.BlockDisplay();
    sensorDisplayBlock.BlockDisplay();
  }

  useEffect(() => {
    display_time();
    setTimeout(() => {
      displayCheckBox();
    }, 1000);
  }, []);

  return (
    <div className="home" id="home">
      <div className="container">
        <HomeTop />
        <HomeCheckbox />
        <HomeDisplay />
      </div>
    </div>
  );
};

export default HomeComponent;
