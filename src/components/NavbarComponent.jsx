import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import Swal from "sweetalert2";

const NavbarComponent = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [profileImg, setProfileImg] = useState([]);
  const [username, setUsername] = useState([]);

  const menuToggle = () => {
    setIsNavbarActive((current) => !current);
  };

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/commandsUsername`)
      .then((response) => {
        setUsername(response.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      });
    axios
      .get(`${process.env.REACT_APP_API}/commandsProfileImg`)
      .then((response) => {
        console.log(response.data);
        setProfileImg(response.data);
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

  return (
    <div>
      <div id="menu-bars" className={`fas ${isNavbarActive ? "fa-times" : "fa-bars"}`} onClick={menuToggle}></div>
      <header className={isNavbarActive ? "active" : ""}>
        <a href="#home" className="logo">
          <span>Smart</span>Tech
        </a>

        <nav className="navbar d-block">
          {username.map((username, index) => (
            <div className="image">
              {profileImg.map((profileImg, index) => (
                <div>
                  <img src={profileImg.profileImg} />
                  <p className="username">{username.username}</p>
                </div>
              ))}
            </div>
          ))}
          <HashLink smooth to={"/#home"} onClick={menuToggle}>
            <span className="material-symbols-outlined">home</span>HOME
          </HashLink>
          <div className="dropdown">
            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="material-symbols-outlined">sensors</span>SENSORS
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <HashLink className="dropdown-item" onClick={menuToggle} smooth to={"/#temp-sensor"}>
                  Temperature
                </HashLink>
              </li>
              <li>
                <HashLink className="dropdown-item" onClick={menuToggle} smooth to={"/#humidity-sensor"}>
                  Humidity
                </HashLink>
              </li>
              <li>
                <HashLink className="dropdown-item" onClick={menuToggle} smooth to={"/#light-sensor"}>
                  Light Intensity
                </HashLink>
              </li>
              <li>
                <HashLink className="dropdown-item" onClick={menuToggle} smooth to={"/#irsensor-sensor"}>
                  IR Sensor
                </HashLink>
              </li>
              <li>
                <HashLink className="dropdown-item" onClick={menuToggle} smooth to={"/#level-sensor"}>
                  Level
                </HashLink>
              </li>
            </ul>
          </div>
          <a href="#experience" onClick={menuToggle}></a>
          <HashLink onClick={menuToggle} smooth to={"/#manual"}>
            <span className="material-symbols-outlined">tune</span>
            MANUAL
          </HashLink>
          <HashLink onClick={menuToggle} smooth to={"/#timer"}>
            <span className="material-symbols-outlined time">schedule</span>
            TIMER
          </HashLink>
          {/* <HashLink onClick={menuToggle} smooth to={"/#pin"}>
            <span className="material-symbols-outlined time">tibia</span>
            PIN
          </HashLink> */}
          <HashLink onClick={menuToggle} smooth to={"/#camera"}>
            <span className="material-symbols-outlined camera">photo_camera</span>
            CAMERA
          </HashLink>
          <div className="dropdown">
            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="material-symbols-outlined">person</span>
              Account
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <HashLink className="dropdown-item" onClick={menuToggle} to={"/account/updateProfileImg"}>
                  Profile Image
                </HashLink>
              </li>
              <li>
                <HashLink className="dropdown-item" onClick={menuToggle} to={"/account/updateUsername"}>
                  User Name
                </HashLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="follow">
          <div className="image">
            <img src={require("./images/KMUTT.png")} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavbarComponent;
