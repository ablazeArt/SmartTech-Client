import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { json, Link } from "react-router-dom";

const HumiditySolenoid = (props) => {
  const [commands, setCommands] = useState([]);
  const [actuatorStatus, setActuatorStatus] = useState([]);
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/commandsHumiditySolenoid`)
      .then((response) => {
        console.log(response.data);
        setCommands(response.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      });
    axios
      .get(`${process.env.REACT_APP_API}/statusActuators`)
      .then((response) => {
        console.log(response.data);
        setActuatorStatus(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const confirmDelete = (id) => {
    Swal.fire({
      title: "Are you certain about deleting this command?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      //userยืนยันการลบคำสั่ง
      if (result.isConfirmed) {
        deleteCommmand(id);
      }
    });
  };
  const deleteCommmand = (id) => {
    //ส่งAPIไปยังserverเพื่อลบข้อมูล
    axios
      .delete(`${process.env.REACT_APP_API}/commandHumiditySolenoid/${id}`)
      .then((response) => {
        Swal.fire({
          title: "Delete Completed",
          icon: "success",
        });
        fetchData();
      })
      .catch((err) => alert(err));
  };
  return (
    <div>
      {commands.map((command, index) => (
        <div className="col-12 column-line list-display">
          <p className="list-display-text actuator-name">{command.actuatorName}</p>
          <p className="list-display-text condition-action">Condition: {command.condition}</p>
          <p className="list-display-text">Initail Humidity:{command.humidityValue}</p>
          <p className="list-display-text">Status:{command.status}</p>
          <button>
            <Link to={`commandHumiditySolenoid/edit/${command.commandId}`} className="list-display-text edit-btn">
              Edit
            </Link>
          </button>
          <button onClick={() => confirmDelete(command.commandId)}>
            <a className="list-display-text delete-btn">Delete</a>
          </button>
          <p className="list-display-text status-command-display">Work Status:</p>
          {actuatorStatus.map((actuatorStatus, index) => (
            <div>
              <img className="img-status" src={actuatorStatus.solenoid === "online" ? require("../images/green-icon.png") : require("../images/red-icon.png")} alt="" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HumiditySolenoid;
