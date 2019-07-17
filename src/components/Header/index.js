import React from 'react';
import './style.scss'

import Navbar from './Navbar';

function Header(props) {
  return (
    <section className='header'>
      <div className='header-container'>
        <Navbar />
        <div className='welcome-container'>
          <div className="welcome">Welcome to the street food You love!</div>
        </div>
      </div>

    </section>
  )
}

export default Header;