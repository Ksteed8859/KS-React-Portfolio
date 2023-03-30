import React from 'react';
import image from '../../styling/images/kate.jpg'

export default function About() {
  return (
    <div>
      <h1 class="aboutTitle">A Little Bit About Me</h1>
      <section className='About'>
        <div class="column imagecard">
          <div class="image">
            <img src={image} alt="ThisIsMe" id="meimg"></img>
          </div>
        </div>

    <div class="column textcard">
      <p>
      My name is Kate Steed. I'm 20 years old and live in Sandy, UT.
      <hr></hr>
      I am currently a student at the University of Utah, and I am enrolled in a bootcamp where I'm learning fullstack development.
      <hr></hr>
      I love to learn new skills, and I love pooling my ideas with other people to further refine and develop the skills that I've learned throughout my coding career.
      <hr></hr>
      Some hobbies of mine include knitting, reading, coding, basic game development, and spoiling my two kittens.
      <hr></hr>
      I'm always looking for more opportunities to expand my skills, so if you'd like to get in touch or collaborate, reach out!
      </p>
    </div>
        
  </section>
  </div>
  );
}
