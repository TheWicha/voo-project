import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './style.scss'
import locations from './locations';


class LocationsMap extends Component {


  setRef(sectionName) {
    return this.props.setRef(sectionName)
  }

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
    
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: 52.418, lng: 16.918 }}
      >
      {locations.map(marker => (<Marker key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} />))}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCUsC2PNRzUO9kHPY2ZGsq61ZQu9e3mxeg'
})(LocationsMap);
