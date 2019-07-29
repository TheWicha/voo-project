import React, { Component } from 'react';
import './style.scss'
import LocationsMap from './LocationsMap';
import img from '../../images/voo.png'
import LocationBox from './LocationBox';
import locations from './LocationsMap/locations'

class Locations extends Component {
  constructor(props) {
    super(props)

    this.title = 'Locations'
    this.text = "Stop in for lunch, dinner, late night or order online for take-out & delivery at our collegetown location. we also offer drop off catering as well as full service."
  }


  setRef(sectionName) {
    return this.props.setRef(sectionName)
  }


  render() {
    return (
      <section ref={this.setRef('locations')} id='locations' className='locations' >
        <div className='locations-wrapper'>
          <div className='locations-container'>
            <div className='locations-header'>
              <h1>{this.title}</h1>
              <p>{this.text}</p>
            </div>
            <div className='locations-logo-boxes-wrapper'>
              <div className='locations-logo-wrapper'>
                <div className='locations-logo'>
                  <img src={img} alt='voo logo' />
                  <h3>Voo <span>{this.title}</span></h3>
                </div>
              </div>
              <div className='location-boxes-wrapper'>
                {locations.map((location, i) =>
                  <LocationBox 
                    key={location.id}
                    locationName={location.name}
                    address={location.address}
                    phone={location.phone}
                  />
                )}
              </div>
            </div>
          </div>
          <div className='map-container'>
            <LocationsMap />
          </div>
        </div>
      </section>
    )
  }
}

export default Locations;
