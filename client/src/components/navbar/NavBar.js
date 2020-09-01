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
       <a href='./'><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 30 90 130" style={{"marginLeft":'px','fill':'none'}}><path fill="rgb(54, 62, 70)" d="M50.765,76.56c0,0.9-0.225,1.26-1.08,1.71c-2.475,1.26-6.66,2.07-10.08,2.07c-9.36,0-14.67-6.48-14.67-16.02c0-9.405,6.075-16.245,15.255-16.245c2.88,0,5.535,0.495,8.235,1.71c0.495,0.225,0.63,0.495,0.63,0.81c0,0.18-0.09,0.36-0.135,0.54l-1.035,2.7c-0.18,0.45-0.36,0.63-0.675,0.63c-0.18,0-0.405-0.09-0.63-0.18c-1.485-0.63-4.05-1.305-6.12-1.305c-2.43,0-4.77,0.9-6.345,2.565c-1.89,1.98-2.97,4.905-2.97,8.595c0,6.975,3.285,11.34,8.685,11.34c1.845,0,3.87-0.27,5.085-0.765l0-8.595l-4.005,0c-0.63,0-0.99-0.225-0.99-0.99l0-2.745c0-0.72,0.36-0.9,1.035-0.9l8.73,0c0.765,0,1.08,0.225,1.08,1.035l0,14.04z" /><path fill="#" d /><polygon id="Shape" stroke="rgb(54, 62, 70)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style={{}} points="39 40 0 40 0 68 39 90 78 68 78 40"></polygon></svg></a>
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
        
        <button className='button_touch_navbar'>
        <a style={{'color':'black'}}href={ResumePdf} target="_blank" rel="nofollow noopener noreferrer" class="nav__StyledResumeButton-ghklvd-10 jXamAq">Resume</a>
        </button>
        </ol>
      </div>
    </div>
  );
};

export default NavBar;
