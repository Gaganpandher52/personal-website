import React, { Component } from 'react';
import './mainHeader.css'
import scrollToComponent from 'react-scroll-to-component';

class MainHeader extends Component {
  render() {
    return (
      <div className='main' id='main'>
        <div className='name-section'>
          <p>Hi, My name is </p>
          <h4>Gaganpreet Pandher</h4>
        </div>

        
      </div>
    );
  }
}

export default MainHeader;