import React, { Component } from 'react';
import links from './links'
import Logo from './Logo'
import './style.scss'


class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isInMove: false,
    };

    
    this.handleColorChange = this.handleColorChange.bind(this)
  };

  componentDidMount(){
    window.addEventListener('scroll', this.handleColorChange)
  }
  componentWillUnmount(){
    window.addEventListener('scroll', this.handleColorChange)
  }

  handleColorChange() {
    if (window.scrollY > 55) {
      return this.setState({ isInMove: true })
    }
    return this.setState({ isInMove: false });
  }

  render() {
    const { isInMove } = this.state
    return (
      <div className={isInMove ? 'navbar-container in-move' : "navbar-container"}>
        <div className='navbar-wrapper'>
          <Logo />
          <nav className="navi">
            {links.map(link => (
              <li className='link' key={link.id}> <a href={link.href}>{link.name}</a> </li>
            ))}
          </nav>
        </div>
      </div>

    )
  }


}

export default Navbar;