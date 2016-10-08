import React, { Component } from 'react'
export default class App extends Component {
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
