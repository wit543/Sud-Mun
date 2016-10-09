import React, { Component } from 'react'
import { Link } from 'react-router'
import './Navbar.scss'

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <div className="navbar  navbar-default nav-app navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle navbar-left" data-toggle="collapse" data-target="#mynavbar-content">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <span className="navbar-brand">SUD-MUN</span>
            </div>

            <div className="collapse navbar-collapse " id="mynavbar-content">
              <ul className="nav navbar-nav">
                <li>
                  <Link to={{ pathname:'/' }}>
                    Map
                  </Link>
                </li>
                <li>
                  <Link to={{ pathname:'/flood' }}>
                    Flood
                  </Link>
                </li>
                {/* <li ><a href="#">Drought</a></li> */}
              </ul>
              <ul className="nav navbar-nav navbar-right">
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
