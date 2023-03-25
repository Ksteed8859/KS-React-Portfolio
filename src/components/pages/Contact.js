import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me!</h1>
      <p> Want to collaborate or get into contact? Send me a message below and I'll get back to you!</p>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="name" class="form-control" id="contactName" aria-describedby="name" placeholder="Enter name"/>
          </div>

          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email"/>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" placeholder='Type your message here!'></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>
  );
}
