import React from 'react';
import links from '../Navbar/links';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



function MobileNavbar(props) {


    return (
      <div className='mobile-navbar-wrapper'>
        <button onClick={props.handleMobiNavi}><FontAwesomeIcon icon={faBars} /></button>
        <nav className={props.mobileActtive ? 'mobi-navi active' : 'mobi-navi'}>
          {links.map((link) => (
            <li className='mobi-link' key={link.id}>
              <a onClick={props.handleOpenMobiNavi} href={link.href}>
                {link.icon}
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </nav>
      </div>
    )
  }
export default MobileNavbar;