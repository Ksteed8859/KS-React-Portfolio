import React from 'react';

export default function Resume() {
  const downloadFile = () => {
    const a = document.createElement('a');
    a.href = '/Steed-Resume.pdf';
    a.download = '/Steed-Resume.pdf';
    document.body.appendChild(a);
    a.click();
}
  return (
    <div>
      <h1 class="resumeTitle">My Resume</h1>
      <section className='Resume'>
        <div className='resumeLink'>
          <button className='btn resumeBtn' onClick={downloadFile} value='download'>
                    Download My Resume
          </button>
        </div>
        
      </section>
    </div>
  );
}
