import React from 'react';

import workWeek from '../../styling/assets/work-week.png'
import teamProfile from '../../styling/assets/team-profile.png'
import employeeTracker from '../../styling/assets/employee-tracker.png'
import weatherDashboard from '../../styling/assets/weather-dashboard.png'
import marvel from '../../styling/assets/Marvel.png'
import tParty from '../../styling/assets/tparty.png'
import ollisanders from '../../styling/assets/ollisanders.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {

  const style = {
    width: '100%',
    padding: '10px',
  }

  return (
    <div>
      <h1 className='portfolioTitle'>My Portfolio</h1>
      <section className='Portfolio'>

        <div className='soloTitle'>
          <h1>Solo Projects</h1>
          <p>These are some projects that I completed on my own using skills I learned in my University of Utah fullstack coding bootcamp</p>
        </div>
        <div className='soloProjects'>

          <div className="box">
            <img src={workWeek} alt="workWeek" style={style}/>
                <h1>Work Week Scheduler</h1>
                <p>HTML, CSS, Javascript</p>
                <p><a href='https://github.com/Ksteed8859/KS-Work-Day-Scheduler'><FontAwesomeIcon icon={faGithub} /></a> <a href='https://ksteed8859.github.io/KS-Work-Day-Scheduler/'><FontAwesomeIcon icon={faComputer} /></a></p>
          </div>

          <div className="box">
            <img src={teamProfile} alt="teamProfile" style={style}/>
                <h1>Team Profile Generator</h1>
                <p>Javascript, Node.js</p>
                <p><a href='https://github.com/Ksteed8859/KS-Team-Profile'><FontAwesomeIcon icon={faGithub} /></a></p>
          </div>

          <div className="box">
            <img src={employeeTracker} alt="employeeTracker" style={style}/>
                <h1>Employee Tracker</h1>
                <p>Node.js, MySql</p>
                <p><a href='https://github.com/Ksteed8859/KS-Employee-Tracker'><FontAwesomeIcon icon={faGithub} /></a></p>
          </div>

          <div className="box">
            <img src={weatherDashboard} alt="weatherDashboard" style={style}/>
                <h1>Weather App</h1>
                <p>HTML, CSS, Javascript</p>
                <p><a href='https://github.com/Ksteed8859/KS-Weather-Tracker'><FontAwesomeIcon icon={faGithub} /></a> <a href='https://ksteed8859.github.io/KS-Weather-Tracker/'><FontAwesomeIcon icon={faComputer} /></a></p>
          </div> 
        </div>

        <div className='groupTitle'>
          <h1>Group Projects</h1>
          <p>These are some projects I worked on as part of a group, using teamwork and delegation to make a unique app</p>
        </div>
        <div className='groupProjects'>

        <div className="box">
            <img src={ollisanders} alt="ollisanders" style={style}/>
                <h1>Ollisander's Wand Store</h1>
                <p>React.js, Node.js, Express.js, MongoDB, Stripe</p>
                <p><a href='https://github.com/Ksteed8859/wizard-wands'><FontAwesomeIcon icon={faGithub} /></a> <a href='https://wizard-wands-production.up.railway.app/'><FontAwesomeIcon icon={faComputer} /></a></p>
          </div>

          <div className="box">
            <img src={marvel} alt="marvelSearch" style={style}/>
                <h1>Marvel Superhero Highlights</h1>
                <p>HTML, Materialize CSS, Javascript</p>
                <p><a href='https://github.com/Yvieyra/project-1'><FontAwesomeIcon icon={faGithub} /></a> <a href='https://yvieyra.github.io/project-1/'><FontAwesomeIcon icon={faComputer} /></a></p>
          </div>

          <div className="box">
            <img src={tParty} alt="TParty" style={style}/>
                <h1>T Party</h1>
                <p>Handlebars.js, Bulma CSS, Javascript, MySQL, Node.js, Express,js</p>
                <p><a href='https://github.com/Ksteed8859/Tea-Party'><FontAwesomeIcon icon={faGithub} /></a> <a href='https://pure-chamber-11978.herokuapp.com/'><FontAwesomeIcon icon={faComputer} /></a></p>
          </div>
            
        </div>
      </section>
    </div>
  );
}
