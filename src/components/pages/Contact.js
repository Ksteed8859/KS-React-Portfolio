import React, {useState} from 'react';

export default function Contact() {

  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');

  const [message, setMessage] = useState('');
  const [messageErr, setMessageErr] = useState('');

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
  };

  const validateName = () => {
    if (name === '') {
      setNameErr('Name is required');
    } else {
      setNameErr('');
    }
  };

  const handleEmailChange = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    }
  };

  const validateEmail = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailErr('Valid email is required');
    } else {
      setEmailErr('');
    }
  };

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message') {
      setMessage(value);
    }
  };

  const validateMessage = () => {
    if (message === '') {
      setMessageErr('Message is required');
    } else {
      setMessageErr('');
    }
  };


    return (
      <div>
        <div className='contactHead'>
          <h1 className='contactTitle'>Contact Me!</h1>
          <p className='contactDesc'> Email: Ksteed8859@gmail.com</p>
          <p className='contactDesc'> Want to collaborate or get into contact? Send me a message below and I'll get back to you!</p>
        </div>   
           <section className="Contact"> 
            <div className='contactDiv'>
            <form>
            <div class="form-group">
                <label for="contactName">Full Name</label>
                <input type="text" value={name} name="name" class="form-control" 
                 onChange={handleNameChange} onBlur={validateName} placeholder="John Doe"
                />
                {nameErr && <div className="nameErr"> **{nameErr}**</div>}
              </div>
              <div class="form-group">
                <label for="contactEmail">Email address</label>
                <input type="text" value={email} name="email" class="form-control" 
                 onChange={handleEmailChange} onBlur={validateEmail} placeholder="this@email.com"
                />
                {emailErr && <div className="emailErr"> **{emailErr}**</div>}
              </div>

              <div class="form-group">
                <label for="contactMessage">Message</label>
                <textarea class="form-control"  value={message} name="message" rows="5" 
                 onChange={handleMessageChange} onBlur={validateMessage} placeholder="I think you're pretty neat!"></textarea>
                 {messageErr && <div className="messageErr"> **{messageErr}**</div>}
              </div>
              <button className='contactBtn' type="button">Submit</button>
            </form>
            </div>
        </section>
        </div>
      );
    }
