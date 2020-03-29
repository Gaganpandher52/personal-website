import React from "react";
import camera from "../images/camera.png";
import keyboard from "../images/keyboard.png";
const TopBar = ({  }) => {
  

  return (
    <div className="main-container">
      
        <span>
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
        </span>
       
        
       
      
    </div>
  );
};

export default TopBar;
