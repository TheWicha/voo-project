import React, { Component } from 'react';
import './style.scss'
import OpeningHours from './OpeningHours';
import Socials from './Socials';
import FooterInfo from './FooterInfo';


class Footer extends Component {


  setRef(sectionName) {
    return this.props.setRef(sectionName)
  }
  
  render() {
    return (
      <section ref={this.setRef('footer')} id='footer' className='footer'>
        <footer className='footer-container'>
          <OpeningHours />
          <Socials />
        </footer>
        <FooterInfo />
      </section>
    )
  }

}

export default Footer