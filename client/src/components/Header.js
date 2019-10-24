import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='main-container'>
        <div>
          <a class="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>


        
      </div>
    );
  }
}

export default Header;