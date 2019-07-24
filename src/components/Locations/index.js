import React, { Component } from 'react';
import './style.scss'


class Locations extends Component {


  setRef(sectionName) {
    return this.props.setRef(sectionName)
  }


  render() {
    return (
      <section ref={this.setRef('locations')} id='locations' className='locations' >
        ..I..
      </section>
    )
  }
}

export default Locations;
