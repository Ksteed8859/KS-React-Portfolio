import React from 'react';

export default function Resume() {
  const downloadFile = () => {
    const a = document.createElement('a');
    a.href = '/KSteed-resume-2023.pdf';
    a.download = '/KSteed-resume-2023.pdf';
    document.body.appendChild(a);
    a.click();
}
  return (
    <div>
      <h1 class="resumeTitle">My Resume</h1>
      <section className='Resume'>
        
        <div class="resumeLink">
      <h1 className='skillTitle'>
      My Skills
      </h1>
      <hr></hr>
      <ul className='skills'>
        <li> HTML <img src='https://skillicons.dev/icons?i=html' alt='html'></img> </li>
        <li> CSS <img src='https://skillicons.dev/icons?i=css' alt='css'></img></li>
        <li> Javascript <img src='https://skillicons.dev/icons?i=js' alt='javascript'></img></li>
        <li> Node.js <img src='https://skillicons.dev/icons?i=nodejs' alt='nodejs'></img></li>
        <li> MySQL <img src='https://skillicons.dev/icons?i=mysql' alt='mysql'></img></li>
        <li> React <img src='https://skillicons.dev/icons?i=react' alt='react'></img></li>
        <li> MongoDB <img src='https://skillicons.dev/icons?i=mongodb' alt='mongodb'></img></li>
        <li> Git <img src='https://skillicons.dev/icons?i=git' alt='git'></img></li>
        <li> Bootstrap <img src='https://skillicons.dev/icons?i=bootstrap' alt='bootstrap'></img></li>
      </ul>

      <hr></hr>
        <button className='btn resumeBtn' onClick={downloadFile} value='download'>
            Download My Resume
        </button>
    </div>

        
        
      </section>
    </div>
  );
}
