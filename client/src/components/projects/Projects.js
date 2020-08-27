import React, { Component } from 'react';
import './projects.css'
import ShowMore from 'react-show-more';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['Project 1', 'Project 2','Project 3', 'Project 4']
     
    };
  }

  render() {
    return (
      <div className='main-projects' id='projects'>
        <div className='main-content-container'>
          <h4>Projects<hr className='hr_line'></hr></h4>
          
          <div className='projects-column-wrap'>
            
            {this.state.data.map((data,i)=>{
             return (
              <div className='projects-column'>
                {data}
              </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;