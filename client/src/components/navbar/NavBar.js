import React from "react";
import scrollToComponent from 'react-scroll-to-component';
import Mainheader from '../mainheader/MainHeader'
import Projects from '../projects/Projects'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './navbar.css'
import  ResumePdf  from './creddleNewApr20.pdf'
const NavBar = ({  }) => {
  

  return (
    <div className="main-container" >
      <div className="main-contents">
        <ol>
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
        {/* <button className='button_touch_navbar'><a href="creddleNewApr20.pdf" target="pdf-frame"></a> Resume </button> */}
        <a href={ResumePdf} target="_blank" rel="nofollow noopener noreferrer" class="nav__StyledResumeButton-ghklvd-10 jXamAq">Resume</a>
        </ol>
      </div>
    </div>
  );
};

export default NavBar;
