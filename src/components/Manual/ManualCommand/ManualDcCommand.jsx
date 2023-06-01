import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ManualDcCommand = (props) => {
  const [commands, setCommands] = useState([]);
  const [actuatorStatus, setActuatorStatus] = useState([]);
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/commandsManualDc`)
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
      .delete(`${process.env.REACT_APP_API}/commandManualDc/${id}`)
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
          <p className="list-display-text">Direction: {command.direction}</p>
          <p className="list-display-text">Rotational Speed:{command.speed}</p>
          <button onClick={() => confirmDelete(command.commandId)}>
            <a className="list-display-text delete-btn">Delete</a>
          </button>
          <p className="list-display-text status-command-display">Work Status:</p>
          {actuatorStatus.map((actuatorStatus, index) => (
            <div>
              <img className="img-status" src={actuatorStatus.motor === "online" ? require("../images/green-icon.png") : require("../images/red-icon.png")} alt="" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ManualDcCommand;
