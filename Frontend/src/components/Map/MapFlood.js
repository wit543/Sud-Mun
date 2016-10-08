
import React, { Component } from 'react'
const END_POINT = 'http://ipinfo.io/'
const API_FLOOD = 'http://128.199.192.241:3000/api/flood/2005'
var map
var infoWindow
var lats = ''
var lngs = ''
export default class MapFlood extends Component{
  createMap() {
    map = new GMaps({
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
    map.loadFromKML({
      url: API_FLOOD,
      suppressInfoWindows: true,
      events: {

        click: function(point) {
          infoWindow.setContent(point.featureData.infoWindowHtml);
          infoWindow.setPosition(point.latLng);
          infoWindow.open(map.map);
        }

      }
    });
    this.setCurrentPosition();
  }

  test(){

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


  setCurrentPosition() {
    GMaps.geolocate({
      success: function(position) {
        map.setCenter(position.coords.latitude, position.coords.longitude);
        console.log('poslat:' + position.coords.latitude)
        console.log('poslon:' + position.coords.longitude)
        lats = position.coords.latitude
        lngs = position.coords.longitude

        map = new GMaps({
          el: '#map',
          lat: lats,
          lng: lngs,
          zoom: 6,
          zoomControl: true,
          panControl: false,
          streetViewControl: false,
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
        infoWindow = new google.maps.InfoWindow({});
        map.loadFromKML({
          url: API_FLOOD,
          suppressInfoWindows: true,
          events: {

            click: function(point) {
              infoWindow.setContent(point.featureData.infoWindowHtml);
              infoWindow.setPosition(point.latLng);
              infoWindow.open(map.map);
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
  onClickSearch(e){
      e.preventDefault()
      let input = ReactDOM.findDOMNode(this.refs.input_search).value
      console.log("search",input);
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
