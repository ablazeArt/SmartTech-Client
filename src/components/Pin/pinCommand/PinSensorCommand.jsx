import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const PinSensorCommand = (props) => {
  const [commands, setCommands] = useState([]);
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/commandsPinsensor`)
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
      .delete(`${process.env.REACT_APP_API}/commandPinsensor/${id}`)
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
          <p className="list-display-text">LDR Pin:{command.ldr}</p>
          <p className="list-display-text">Level 1 Pin:{command.level1}</p>
          <p className="list-display-text">Level 2 Pin:{command.level2}</p>
          <p className="list-display-text">Level 3 Pin:{command.level3}</p>
          <p className="list-display-text">Level 4 Pin:{command.level4}</p>
          <p className="list-display-text">IR Pin:{command.ir}</p>
          <button onClick={() => confirmDelete(command.commandId)}>
            <a className="list-display-text delete-btn">Delete</a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default PinSensorCommand;
