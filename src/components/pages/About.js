import React from 'react';
import image from '../../styling/assets/kate.jpg'

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
      Hi! My name is Katelyn Steed.
      <hr></hr>
      I am a recent graduate of the University of Utah's fullstack web development bootcamp, graduated April of 2023
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
