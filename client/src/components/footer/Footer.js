import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='main' style={{'height':'450px'}}>
        <div className=''>
        <hr className='hr_line' style={{'marginLeft':'100px'}}></hr>
        <section class="section-main">
          <h2 class="">What’s Next?</h2>
          <h2 class="">Get In Touch</h2>
          <p>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <a href="mailto:gaganpandher52@gmail.com"><button className='button_touch' style={{'marginLeft':'0px'}}>Say Hello</button></a>
        </section>
        <a className='last_footer' href='https://github.com/Gaganpandher52'>
          <div>
            Designed & built by Gaganpreet Pandher  
          </div>
        </a>
        </div>
        
      </div>
    );
  }
}

export default Footer;