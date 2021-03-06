import React, {
  Component
} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Map.scss'
import {MapFlood} from '../Map'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import 'whatwg-fetch'
import $ from 'jquery'
export default class App extends Component {

  render() {
    return (
      <div >
        <Navbar/>
        {/* <SearchBar/> */}
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
