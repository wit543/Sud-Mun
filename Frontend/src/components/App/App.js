import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Map.scss'
import Navbar from './Navbar'
export default class App extends Component {
  createMap(){
    let map = new GMaps({
       el: '#map',
       lat: -12.043333,
       lng: -77.028333
     });
  }
  componentDidMount(){
    this.createMap();
  }
  componentDidUpdate(){

  }
  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <div className="map-holder">
          <div id="map"></div>
        </div>
      </div>
    )
  }
}
