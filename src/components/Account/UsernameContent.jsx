import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavbarComponent from "../NavbarComponent";

const Username = () => {
  const [state, setState] = useState({
    username: "",
  });

  const { username } = state;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/commandUsername/25cc9d11-f1ab-4167-8cb5-5ac4334922bb`)
      .then((response) => {
        //แยกข้อมูล
        const { username } = response.data;
        //เก็บข้อมูลเดิม
        setState({ ...state, username });
      })
      .catch((err) => console.log(err.response.data));
    // eslint-disable-next-line
  }, []);

  const showUpdateForm = () => {
    return (
      <div className="body-main">
        <div className="container" id="edit-temp-servo-display">
          <div className="head-edit">
            <h1>Change User Name</h1>
          </div>
          <div className="container text-center display-block main-block edit-block" style={{ paddingTop: "23px" }}>
            <form onSubmit={submitForm}>
              <div className="row align-items-start">
                <div className="col column-line command-actuator">
                  <h1 className="form-account-head-value">New User Name</h1>
                </div>
                <div className="col column-line command-actuator">
                  <input type="text" className="form-value" placeholder="New User Name" value={username} onChange={inputValue("username")} />
                  <div>
                    <button type="submit" className="form-submit">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <button className="return-btn">
            <HashLink smooth to={"/"}>
              Back to command page
            </HashLink>
          </button>
        </div>
      </div>
    );
  };
  //   //กำหนดค่าให้state
  const inputValue = (name) => (event) => {
    // console.log(event.target.value)
    setState({ ...state, [name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API}/commandUsername/25cc9d11-f1ab-4167-8cb5-5ac4334922bb`, {
        username,
      })
      .then((response) => {
        Swal.fire("Congratulations", "Command successfully updated!", "success");
        //อัพเดทข้อมูลใหม่
        const { username } = response.data;
        setState({ ...state, username });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.error,
        });
      });
  };

  return (
    <div className="edit-component">
      <NavbarComponent />
      {showUpdateForm()}
    </div>
  );
};

export default Username;
