import React from 'react';

function Navbar({currentPage, handlePageChange}) {
  const navLink = {color: '#FFF'}
  const navLinkActive = {color: '#3EB489', textDecoration: '#3EB489 underline dotted'}
  
    return (
      <div className='nav'>
        <h1>Kate Steed</h1>
        <ul className='navlinks'>
            <li>
                <a
                  href="#about"
                  onClick={() => handlePageChange('About')}
                  style={currentPage === 'About' ? navLinkActive : navLink}
                >
                  About
                </a>
            </li>
            <li>
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                  style={currentPage === 'Portfolio' ? navLinkActive : navLink}
                >
                  Portfolio
                </a>
            </li>
            <li>
                <a
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                  style={currentPage === 'Contact' ? navLinkActive : navLink}
                >
                  Contact
                </a>
            </li>
            <li>
                <a
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}
                  style={currentPage === 'Resume' ? navLinkActive : navLink}
                >
                  Resume
                </a>
            </li>
        </ul>
      </div>

    );
}

export default Navbar;