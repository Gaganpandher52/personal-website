import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='main'>
        <div className='main-content-container'>
        <section class="">
          <h2 class="numbered-heading overline">What’s Next?</h2>
          <h2 class="title">Get In Touch</h2>
          <p>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <a href="mailto:gaganpandher52@gmail.com"><button className='button_touch'>Say Hello</button></a>
        </section>

        </div>
        
      </div>
    );
  }
}

export default Footer;