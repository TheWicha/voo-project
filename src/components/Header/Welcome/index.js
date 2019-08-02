import React from 'react';
import './style.scss'

function Welcome(props) {
  return (
    <div className='welcome-container'>
      <div className="welcome">
        <span className='food1'>
          world's best
        </span>
        <span className='food2'>
          street food
        </span>
        <div className='food-btns'>
          <a href="#menu" className='food-btn'>check menu</a>
          <a href="#locations" className='food-btn'>see locations</a>
        </div>

      </div>
    </div>
  )
}

export default Welcome;
