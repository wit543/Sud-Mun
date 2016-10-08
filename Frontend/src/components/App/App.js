import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Map.scss'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import 'whatwg-fetch'
import $ from 'jquery'
const END_POINT = 'http://ipinfo.io/'

var map
var lats = ''
var lngs = ''

export default class App extends Component {

  createMap(){
    map = new GMaps({
      el: '#map',
      lat: 14.46523,
      lng: 100.13137,
      zoomControl : false,
      panControl : false,
      streetViewControl : false,
      mapTypeControl: false,
      overviewMapControl: false
    });
    this.setCurrentPosition();


  }

  componentDidMount(){
    this.createMap();
  }

  componentDidUpdate(){
    if(this.lastLat == this.props.lat && this.lastLng == this.props.lng){
      return;
    }
    this.lastLat = this.props.lat;
    this.lastLng = this.props.lng

    let map = new GMaps({
      el: '#map',
      lat: this.props.lat,
      lng: this.props.lng
    });


    map.addMarker({
      lat: this.lats,
      lng: this.lngs
    });

  }


  setCurrentPosition(){
    GMaps.geolocate({
      success: function(position) {
        map.setCenter(position.coords.latitude, position.coords.longitude);
        console.log('poslat:'+position.coords.latitude)
        console.log('poslon:'+position.coords.longitude)
        lats = position.coords.latitude
        lngs = position.coords.longitude

        map = new GMaps({
          el: '#map',
          lat: lats,
          lng: lngs,
          zoom: 6,
          zoomControl : false,
          panControl : false,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
        });
        map.addMarker({
          lat: lats,
          lng: lngs,
          title: 'Your are here',
          click: function(e) {
            alert('Hello');
          }
        });
      },
      error: function(error) {
        alert('Geolocation failed: '+error.message);
      },
      not_supported: function() {
        alert("Your browser does not support geolocation");
      },
      always: function() {
        console.log("Done!");
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <SearchBar/>
        <div className="map-container">
          <div id="map"></div>
          <button className="btn btn-default btn-currentlocation btn-sm" onClick={this.setCurrentPosition.bind(this)}>
            <span className="icon-mylocation" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    )
  }
}
