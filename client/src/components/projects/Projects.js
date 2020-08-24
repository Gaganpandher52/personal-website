import React, { Component } from 'react';
import './projects.css'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['Project 1', 'Project 2']
     
    };
  }

  render() {
    return (
      <div className='main-projects' id='projects'>
        <div className='main-content-container'>
          <h4>Projects<hr className='hr_line'></hr></h4>
          <div className='projects-column'>
            {this.state.data.map(data=>{
              

            })}
            
          </div>


        </div>
        
      </div>
    );
  }
}

export default Projects;