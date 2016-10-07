import React, { Component } from 'react'
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
              <a className="navbar-brand" href="#">SOD-MUN</a>
            </div>

            <div className="collapse navbar-collapse " id="mynavbar-content">
              <ul className="nav navbar-nav">
                <li ><a href="#">Feature 1</a></li>
                <li ><a href="#">Feature 2</a></li>
                <li ><a href="#">Feature 3</a></li>
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
