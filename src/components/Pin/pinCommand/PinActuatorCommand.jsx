import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const PinActuatorCommand = (props) => {
  const [commands, setCommands] = useState([]);
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/commandsPinActuator`)
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
      .delete(`${process.env.REACT_APP_API}/commandPinActuator/${id}`)
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
          <p className="list-display-text">LED Pin:{command.led}</p>
          <p className="list-display-text">Buzzer Pin:{command.buzzer}</p>
          <p className="list-display-text">Solenoid Pin:{command.solenoid}</p>
          <p className="list-display-text">Servo Pin:{command.level3}</p>
          <p className="list-display-text">DC Motor 1 Pin:{command.dc1}</p>
          <p className="list-display-text">DC Motor 2 Pin:{command.dc2}</p>
          <p className="list-display-text">DC Motor 3 Pin:{command.dc3}</p>
          <p className="list-display-text">DC Motor 4 Pin:{command.dc4}</p>
          <button onClick={() => confirmDelete(command.commandId)}>
            <a className="list-display-text delete-btn">Delete</a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default PinActuatorCommand;
