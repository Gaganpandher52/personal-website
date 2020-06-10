import React from "react";
import camera from "../images/camera.png";
import keyboard from "../images/keyboard.png";
import scrollToComponent from 'react-scroll-to-component';
import Mainheader from './MainHeader'
import Projects from './Projects'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const TopBar = ({  }) => {
  

  return (
    <div className="main-container" >
        
      <div>

        <Link
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
          >
          Home
        </Link>
        
        <span>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
          >
          Projects
        </Link>
        </span>
        <span>
          <a href="#contact">Contact</a>
        </span>
        <span>
          <a href="#about">About</a>
        </span>
          
      </div>
    </div>
  );
};

export default TopBar;
