import React, { Component } from 'react';
import './mainHeader.css'
import scrollToComponent from 'react-scroll-to-component';

class MainHeader extends Component {
  render() {
    return (
      <div className='main' id='main'>
        <div className='name-section'>
          <p className='name'>Hi, My name is </p>
          <h4>Gaganpreet Pandher.</h4>
          <h4 className=''>I build things for the web.</h4>
          <p className='summary'>I am a software developer based in Calgary.</p>
          <button className='button_touch'>Get in touch</button>
        </div>
      </div>
    );
  }
}

export default MainHeader;