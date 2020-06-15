// import React from 'react';
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/navbar/NavBar";
import MainHeader from "./components/mainheader/MainHeader"
import Projects from "./components/projects/Projects"
import scrollToComponent from 'react-scroll-to-component';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  
  
  render() {
  
    return (
      <div className="app-container-main">
        <NavBar/>
        <MainHeader/>
        <Projects/>
      </div>
    );
  }
}

export default App;
