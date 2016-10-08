
import React, { Component } from 'react'
import SearchBar from '../App/SearchBar'
import ReactDOM from 'react-dom'

const END_POINT = 'http://ipinfo.io/'
const API_FLOOD = 'http://128.199.192.241:3000/api/flood/2005'
var map
var infoWindow
var lats = ''
var lngs = ''
export default class Map extends Component{
  createMap() {
    map = new GMaps({
      el: '#map',
      lat: 14.46523,
      lng: 100.13137,
      zoom: 6,
      zoomControl: false,
      panControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      overviewMapControl: false
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

        map.lat = lats
        map.lng = lngs

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

  searchForAddress(address){

  		var self = this;
      console.log('address',address);

  		// We will use GMaps' geocode functionality,
  		// which is built on top of the Google Maps API

  		GMaps.geocode({
  			address: address,
  			callback: function(results, status) {

  				if (status !== 'OK') return;

  				var latlng = results[0].geometry.location;

  				self.setState({
  					currentAddress: results[0].formatted_address,
  					mapCoordinates: {
  						lat: latlng.lat(),
  						lng: latlng.lng()
  					}
  				});
          console.log("new",latlng.lat());
          console.log("new",latlng.lng());
          map.lat = latlng.lat()
          map.lng =  latlng.lng()
          
          lats = latlng.lat()
          lngs = latlng.lng()

          map.removeMarkers()
          map.setCenter(map.lat, map.lng );
          map.addMarker({
            lat: lats,
            lng: lngs,
            title: results[0].formatted_address,
            click: function(e) {
              alert('Hello');
            }
          });
  			}
  		});

  	}
  render(){

    return (
      <div className = "map-container">
        <SearchBar
          onSearch={this.searchForAddress.bind(this)} />
        <div id = "map" ></div>
        <button className = "btn btn-default btn-currentlocation btn-sm"
          onClick = {this.setCurrentPosition.bind(this)}>
          <span className = "icon-mylocation" aria-hidden = "true" ></span>
        </button>
      </div>
    );
  }

}
