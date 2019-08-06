import React from 'react';
import days from '../days'

function OpeningHours(props) {
  return (
        <div className='opening-hours days'>
          <h3>Opening hours</h3>
          {days.map(day => (
            <div key={day.id} className='day-box'>
              <p>{day.name}</p>
              <div className='day-hr'>
                <p>{day.open}</p><span>-</span><p>{day.closed}</p>
              </div>
            </div>
          ))}
        </div>
  )
}

export default OpeningHours