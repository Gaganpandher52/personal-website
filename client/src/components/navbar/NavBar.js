import React from "react";
import scrollToComponent from 'react-scroll-to-component';
import Mainheader from '../mainheader/MainHeader'
import Projects from '../projects/Projects'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './navbar.css'
const NavBar = ({  }) => {
  

  return (
    <div className="main-container" >
      <div>
        <ol>
          
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
          <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            >
            contact
          </Link>
          </span>
          <span>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            >
            about
          </Link>
          </span>
          
        </ol>
      </div>
    </div>
  );
};

export default NavBar;
