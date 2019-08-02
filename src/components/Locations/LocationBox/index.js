import React, { Component } from 'react';
import './style.scss'
import logo from '../../../images/voo.png'
import propTypes from 'prop-types'

class LocationBox extends Component {

  render() {
    
    const { locationName, address, phone, startAnimation, index} = this.props

    return (
      <div className={startAnimation ? `location-box box${index}` : 'location-box'}>
        <img src={logo} alt='voo logo' />
        <h3>{locationName}</h3>
        <button href="#">Order Online</button>
        <p>{address}</p>
        <p className='location-box-phone'>{phone}</p>
      </div>
    )
  }
}

LocationBox.propTypes = {
  locationName: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
}

export default LocationBox