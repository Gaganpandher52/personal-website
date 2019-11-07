import React from "react";
import camera from "../images/camera.png";
import keyboard from "../images/keyboard.png";
const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: styles.white(),
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={topBarStyle} className="main-container">
      
        {/* <span>
          <img className="navbar-image" src={camera}></img>
        </span>
        <span>
          <a class="active" href="#home">
            Home
          </a>
        </span>
        <span>
          <a href="#news">Projects</a>
        </span>
        <span>
          <a href="#contact">Contact</a>
        </span>
        <span>
          <a href="#about">About</a>
        </span>
        <span>
          <p className="signature">Made by Gaganpreet</p>
        </span>
        <span>
          <img className="navbar-image-right" src={keyboard}></img>
        </span> */}
        <span>{`Home`}</span>
        <span>{`Home`}</span>
        <span>{`Home`}</span>
        
       
      
    </div>
  );
};

export default TopBar;
