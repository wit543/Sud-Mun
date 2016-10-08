import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Map.scss'
import Navbar from './Navbar'
import 'whatwg-fetch'
import $ from 'jquery'
const END_POINT = 'http://ipinfo.io/'
export default class App extends Component {
  createMap(){

    var lats = ''
    var lngs = ''
    console.log('createmap');




    $(document).ready(function(){
      $.get(END_POINT, function (response)
      {
        console.log(response.loc);
        lats = response.loc.split(',')[0];
        lngs = response.loc.split(',')[1];

        let map = new GMaps({
          el: '#map',
          lat: lats,
          lng: lngs,
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

      }, "jsonp");



    });

    console.log(lats);
    console.log(lngs);

    // fetch(END_POINT).then(function(response) {
    // console.log(response);
    //     lats = response.loc.split(',')[0];
    // var lngs = response.loc.split(',')[1];
    // console.log(response);
    //
    // }, function(error) {
    // console.log(error);
    //
    // })
    // fetch(END_POINT).then(function(response) {
    //   if (!response.ok) {
    //     throw Error(response.statusText);
    //   }
    //   return response;
    // }).then(function(response) {
    //   var lats = response.loc.split(',')[0];
    //   var lngs = response.loc.split(',')[1];
    //   console.log(response);
    //   onClose()
    // }).catch(function(error) {
    //   console.log(error);
    // });
    let map = new GMaps({
      el: '#map',
      lat: 14.46523,
      lng: 100.13137,
      zoomControl : false,
      panControl : false,
      streetViewControl : false,
      mapTypeControl: false,
      overviewMapControl: false
    });
    // GMaps.geolocate({
    //   success: function(position) {
    //     map.setCenter(position.coords.latitude, position.coords.longitude);
    //   },
    //   error: function(error) {
    //     alert('Geolocation failed: '+error.message);
    //   },
    //   not_supported: function() {
    //     alert("Your browser does not support geolocation");
    //   },
    //   always: function() {
    //     alert("Done!");
    //   }
    // });
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
      lat: this.props.lat,
      lng: this.props.lng
    });

  }
  render() {
    return (
      <div>
        <Navbar/>
        <div className="map-holder">
          <div id="map"></div>
        </div>
      </div>
    )
  }
}
