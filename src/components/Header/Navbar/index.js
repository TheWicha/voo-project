import React, { Component } from 'react';
import id from 'shortid'
import links from './links'
import Logo from '../Logo'
import './style.scss'


class Navbar extends Component {


  render() {
    return (
      <div className="navbar-container">
        <div className='navbar-wrapper'>
          <Logo />
          <nav className="navi">
            {links.map(link => (
              <li className='link' key={id.generate()}> <a href={link.href}>{link.name}</a> </li>
            ))}
          </nav>
        </div>
      </div>

    )
  }


}

export default Navbar;