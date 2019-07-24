import React from 'react';
import links from './links';
import Logo from './Logo';
import './style.scss';


function Navbar(props){
  const { isInMove, activeIndex } = props
    
  return (
    <div className={isInMove ? 'navbar-container in-move' : "navbar-container"}>
      <div className='navbar-wrapper'>
        <Logo />
        <nav className="navi">
          {links.map((link, i) => (
            <li className='link' key={link.id}> 
              <a className={i === activeIndex ? 'activated' : null} 
                 href={link.href}>
                  {link.name}
              </a> 
            </li>
          ))}
        </nav>
      </div>
    </div>
  )
}
export default Navbar;