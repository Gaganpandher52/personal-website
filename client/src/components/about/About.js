import React, { Component } from 'react';
import './about.css'

class About extends Component {
  render() {
    return (
      <div className='main-about' id='about'>
        <div className='main-content-container'>
          <h4>About<hr className='hr_line'></hr></h4>
          <p className='about_summary'>I am a software developer based in Calgary.</p>
          <p className='about_summary'>
          Improved my problem solving skills through education experiences. 
          Always excited to tackle new challenges and technologies. 
          Enjoy keeping up with latest programming/tech information 
          and technologies to advance as a developer.</p>
          <p className='about_summary'>Here are a few technologies I've been working with recently:</p>
          <ul className='about_summary'style={{'display':'flex','flex-direction': 'row'}}>
            <div>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            </div>
            <div>
            <li>React</li>
            <li>Node.js</li>
            </div>
          </ul>
        </div>

        
      </div>
    );
  }
}

export default About;