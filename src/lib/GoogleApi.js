import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { Map, Marker } from 'google-maps-react';
require('dotenv').config();

export class MapContainer extends Component {


    render() {
        const locations = this.props.locations;
        let arr = []
        locations.forEach((item, index) => {
            arr.push(<Marker key={index} position={{ lat: item[1], lng: item[2] }} />)
        });

        const mapStyles = {
            width: '100%',
            height: '500px',
        };

        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: -25.438091, lng: -49.265218 }}
            >
                {arr}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API)
})(MapContainer)