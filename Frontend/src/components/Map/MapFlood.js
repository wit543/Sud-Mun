
import React, { Component } from 'react'
const END_POINT = 'http://ipinfo.io/'
const API_FLOOD = 'http://128.199.192.241:3000/api/flood/2005'
var mapflood
var infoWindow
var latsflood = ''
var lngsflood = ''
export default class MapFlood extends Component{
  createMap() {
    mapflood = new GMaps({
      el: '#map',
      lat: 14.46523,
      lng: 100.13137,
      zoomControl: false,
      panControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      overviewMapControl: false
    });
    infoWindow = new google.maps.InfoWindow({});
    mapflood.loadFromKML({
      url: API_FLOOD,
      suppressInfoWindows: true,
      events: {

        click: function(point) {
          infoWindow.setContent(point.featureData.infoWindowHtml);
          infoWindow.setPosition(point.latLng);
          infoWindow.open(mapflood.map);
        }

      }
    });
    this.setCurrentPosition();


  }

  componentDidMount() {
    this.createMap();
  }

  componentDidUpdate() {
    if (this.lastLat == this.props.lat && this.lastLng == this.props.lng) {
      return;
    }
    this.lastLat = this.props.lat;
    this.lastLng = this.props.lng

    let mapflood = new GMaps({
      el: '#map',
      lat: this.props.lat,
      lng: this.props.lng
    });


    mapflood.addMarker({
      lat: this.lats,
      lng: this.lngs
    });

  }


  setCurrentPosition() {
    GMaps.geolocate({
      success: function(position) {
        mapflood.setCenter(position.coords.latitude, position.coords.longitude);
        console.log('poslat:' + position.coords.latitude)
        console.log('poslon:' + position.coords.longitude)
        latsflood = position.coords.latitude
        lngsflood = position.coords.longitude

        mapflood = new GMaps({
          el: '#map',
          lat: latsflood,
          lng: lngsflood,
          zoom: 6,
          zoomControl: true,
          panControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          overviewMapControl: false
        });
        mapflood.addMarker({
          lat: latsflood,
          lng: lngsflood,
          title: 'Your are here',
          click: function(e) {
            alert('Hello');
          }
        });
        infoWindow = new google.maps.InfoWindow({});
        mapflood.loadFromKML({
          url: API_FLOOD,
          suppressInfoWindows: true,
          events: {

            click: function(point) {
              infoWindow.setContent(point.featureData.infoWindowHtml);
              infoWindow.setPosition(point.latLng);
              infoWindow.open(mapflood.map);
            }

          }
        });
      },
      error: function(error) {
        alert('Geolocation failed: ' + error.message);
      },
      not_supported: function() {
        alert("Your browser does not support geolocation");
      },
      always: function() {
        console.log("Done!");
      }
    });
  }
  render(){

    return (
      <div className = "map-container">
        <div id = "map" ></div>
        <button className = "btn btn-default btn-currentlocation btn-sm"
          onClick = {this.setCurrentPosition.bind(this)}>
          <span className = "icon-mylocation" aria-hidden = "true" ></span>
        </button>
      </div>
    );
  }

}
