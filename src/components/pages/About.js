import React from 'react';
import image from '../../styling/images/kate.jpg'

export default function About() {
  return (
    <section class='homeimage'>
      <h1 class="aboutTitle">A Little Bit About Me</h1>
      <div class='container'>
        <div class='row'>
          <div class="col-6">
            <div class="column textcard">
              <p>Hi!</p>
              <p>My name is Kate Steed. I'm 20 years old and live in Sandy, UT.</p>
              <p>I will soon be graduating from the coding bootcamp at the University of Utah, and will be certified to work as a fullstack developer.</p>
              <p>Some hobbies of mine include knitting, reading, coding, basic game development, and spending time with my two cats.</p>
              <p>I'm always looking for more opportunities to expand my skills, so if you'd like to get in touch or collaborate, reach out!</p>
            </div>
          </div>
          <div class="col-6">
            <div class="column imagecard">
              <div class="image">
                <img src={image} alt="ThisIsMe"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
