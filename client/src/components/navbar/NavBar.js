import React from "react";
import scrollToComponent from 'react-scroll-to-component';
import Mainheader from '../mainheader/MainHeader'
import Projects from '../projects/Projects'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './navbar.css'
const NavBar = ({  }) => {
  

  return (
    <div className="main-container" >
      <div className="main-contents">
        <ol>
          <li>
            <Link
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
              >
              Homes
            </Link>
          </li>
          <li>
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
          </li>
          <li>
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
              >
              Contact
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
              >
              About
            </Link>
          </li>
        <button className='button_touch_navbar'> Resume </button>
        </ol>
      </div>
    </div>
  );
};

export default NavBar;
