
import React, { Component } from 'react'
import SearchBar from '../App/SearchBar'
// const END_POINT = 'http://ipinfo.io/'
var end_point
const API_FLOOD = 'http://128.199.192.241:3000/api/flood/'
var map
var infoWindow
var lats = ''
var lngs = ''
var ctaLayer
export default class MapFlood extends Component{
  constructor(props){
    super(props)
    this.state = {
      value:2009
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
ctaLayer = new google.maps.KmlLayer(null);
ctaLayer.setMap(null)
		this.setState({value: e.target.value})
    end_point =  API_FLOOD+e.target.value+"/"
    console.log(end_point);
    map = new GMaps({
      el: '#map',
      lat: lats,
      lng: lngs,
      zoomControl: false,
      panControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      overviewMapControl: false
    });
    map.loadFromKML({
      url: end_point
      })
    this.setCurrentPosition();
	}

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
      url: API_FLOOD+"2005/"})
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
        map.lat = lats
        map.lng = lngs
        map.removeMarkers()
        map.addMarker({
          lat: lats,
          lng: lngs,
          title: 'Your are here',
          click: function(e) {
            self.onShowModal()
          }
        });
        infoWindow = new google.maps.InfoWindow({});
        end_point =  API_FLOOD+"2005/"
        map.loadFromKML({
          url: end_point,
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
  searchForAddress(address){

  		var self = this;
      console.log('address',address);
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
              self.onShowModal()
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
    <div className="row row-slider">
            <div className="col-md-4 col-xs-4"></div>
      <div className="col-md-4 col-xs-4">
        <input type="range" name="points" className = "silder" min="2005" max="2014"
          value={this.state.value} onChange={this.handleChange}
          />
      </div>
      <div className="col-md-2 col-xs-2">
      </div>
      <div className="col-md-2 col-xs-2 "></div>
    </div>

    <div className="row">
      <div className="col-md-4 col-xs-4"></div>
      <div className="col-md-4 col-xs-4 text-year">
        <div className="">{"Flood area in " + this.state.value +" year "}</div>
      </div>
      <div className="col-md-4 col-xs-4 "></div>
    </div>

      </div>
    );
  }

}
