import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import './Map.css';

export class MapContainer extends Component {









  render() {
      return (
        <Map
        style={this.style}
        className='Map'
        google={this.props.google}
        zoom={14}
        initialCenter={{
            lat: 33.979179,
            lng: -118.032844
          }}
        >
        </Map>
      );
    }
  }






export default GoogleApiWrapper({
  apiKey: 'AIzaSyBo0lcnzaK9u2K7ThK41BRte2GPF2X9eaE', 
})(MapContainer)