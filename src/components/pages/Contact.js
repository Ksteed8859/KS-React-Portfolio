import React, {useState} from 'react';

export default function Contact() {

    return (
      <div>
        <div className='contactHead'>
          <h1 className='contactTitle'>Contact Me!</h1>
          <p className='contactDesc'> Want to collaborate or get into contact? Send me a message below and I'll get back to you!</p>
        </div>   
           <section className="Contact"> 
            <div className='contactDiv'>
            <form>
            <div class="form-group">
                <label for="contactName">Full Name</label>
                <input type="name" class="form-control" placeholder="John Doe"/>
              </div>
              <div class="form-group">
                <label for="contactEmail">Email address</label>
                <input type="email" class="form-control" placeholder="name@email.com"/>
              </div>

              <div class="form-group">
                <label for="contactMessage">Message</label>
                <textarea class="form-control"  rows="5" placeholder="I think you're pretty neat!"></textarea>
              </div>
              <button className='contactBtn' type="button">Submit</button>
            </form>
            </div>
        </section>
        </div>
      );
    }
