// import React from 'react';
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TopBar from "./components/TopBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  
  render() {
    

    return (
      <div className="app-container-main">
        {/* <Header /> */}
        <TopBar />
      </div>
    );
  }
}

export default App;
