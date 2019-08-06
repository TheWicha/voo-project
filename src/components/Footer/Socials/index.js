import React from 'react';
import socials from './socials'


function Socials(props) {
  return (
    <div className='opening-hours contact'>
      <h3>Contact With Us</h3>
      <div>
        <p>Catering</p>
        <p>+48 500 000 113</p>
        <br />
        <br />
        <p>Office</p>
        <p>+48 500 000 113</p>
        <br />
        <br />
        <ul className='social-list'>
          {socials.map(social => (
            <li key={social.id}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Socials