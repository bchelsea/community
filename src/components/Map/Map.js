import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import './Map.css';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
   
  style = {
    width: '25%',
    height: '50%',
    border:  '2px solid navy'
  
  }

  render() {
      return (
      <div className='Map-Box'>
        <h4 className='map-header'> City Map </h4>
        <Map
          style={this.style}
          google={this.props.google}
          zoom={12}
          clickableIcons={false}
          initialCenter={{
              lat: 33.979179,
              lng: -118.032844
            }}
          >
        </Map>
      </div>
      );
    }
  }






export default GoogleApiWrapper({
  apiKey: 'AIzaSyBo0lcnzaK9u2K7ThK41BRte2GPF2X9eaE', 
})(MapContainer)