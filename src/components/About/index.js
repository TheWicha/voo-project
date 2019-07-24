import React, { Component } from 'react';
import './style.scss'
import img from '../../images/voo.png'

class About extends Component {



  setRef(sectionName) {
    return this.props.setRef(sectionName)
  }

  render() {

    return (
      <section ref={this.setRef('about')} id='about-us' className='about' >
        <div className='about-us'>
          <h1>Our Story</h1>
          <img src={img} alt='Voo logo' />
          <p>
            Voo is a brick & mortar, quick service restaurant inspired by street vendors,
            carts & trucks from across the country & the globe. Check out either of our locations
            for a quick bite or hang at bar for some of the best nightlife in Poland.
          </p>
        </div>
      </section>
    )
  }
}

export default About;
