// import React from 'react';
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import MainHeader from "./components/MainHeader"
import Projects from "./components/Projects"
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
        <TopBar/>
        <MainHeader/>
        <Projects/>
      </div>
    );
  }
}

export default App;
