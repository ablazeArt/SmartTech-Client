import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavbarComponent from "../NavbarComponent";

const ProfileImg = () => {
  const [state, setState] = useState({
    profileImg: "",
  });

  const { profileImg } = state;

  function covertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); //base64encode string
      inputValue("profileImg")({ target: { value: reader.result } });
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/commandProfileImg/0b8d3b32-fab1-4823-94c0-30d405e6c387`)
      .then((response) => {
        //แยกข้อมูล
        const { profileImg } = response.data;
        //เก็บข้อมูลเดิม
        setState({ ...state, profileImg });
      })
      .catch((err) => console.log(err.response.data));
    // eslint-disable-next-line
  }, []);

  const showUpdateForm = () => {
    return (
      <div className="body-main">
        <div className="container" id="edit-temp-servo-display">
          <div className="head-edit">
            <h1>Change Profile Image</h1>
          </div>
          <div className="container text-center display-block main-block edit-block" style={{ paddingTop: "23px" }}>
            <form onSubmit={submitForm}>
              <div className="row align-items-start">
                <div className="col column-line command-actuator">
                  <h1 className="form-account-head-value">New Profile Image</h1>
                  <p className="account-warn-imgsize">( Please ensure that the uploaded image is within a size limit of 40 KB. )</p>
                </div>
                <div className="col column-line command-actuator">
                  <input className="input-img" accept="image/*" type="file" onChange={covertToBase64} />
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
      .put(`${process.env.REACT_APP_API}/commandProfileImg/0b8d3b32-fab1-4823-94c0-30d405e6c387`, {
        profileImg,
      })
      .then((response) => {
        Swal.fire("Congratulations", "Profile Image successfully updated!", "success");
        //อัพเดทข้อมูลใหม่
        const { profileImg } = response.data;
        setState({ ...state, profileImg });
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

export default ProfileImg;
