import React, { Component } from 'react';
import './style.scss'
import PageText from '../PageText';

class About extends Component {
  constructor(props) {
    super(props)


    this.title = 'Our Story'
    this.text = <span>
      Voo is a brick & mortar, quick service restaurant inspired by street vendors,
                      carts & trucks from across the country & the globe. Check out either of our {<a href='#locations'>locations</a>}
      for a quick bite or hang at bar for some of the best nightlife in Poland.
                </span>
  }


  setRef(sectionName) {
    return this.props.setRef(sectionName)
  }


  render() {
    const { startAnimation } = this.props
    return (
      <section ref={this.setRef('about')} id='about-us' className='about' >
        <div className={(startAnimation) ? 'about-us slide-bottom' : 'about-us'}>
          <PageText
            title={this.title}
            text={this.text}
          />
        </div>
      </section>
    )
  }
}

export default About;
