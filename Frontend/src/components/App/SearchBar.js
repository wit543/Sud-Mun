import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './SearchBar.scss'
export default class SearchBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      value:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
		this.setState({value: e.target.value});
	}

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state.value);
    this.props.onSearch(this.state.value);
    // this.getDOMNode().querySelector('input').blur();
  }

  render() {
    return (
      <div>
        {/* <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..."/>
          <span className="input-group-btn">
          <button className="btn btn-secondary" type="button">Go!</button>
          </span>
          </div> */}
          <form className="form-horizontal search-form" onSubmit={this.handleSubmit}
            ref = "input_search">
            <div className="form-group">
              <div className="col-xs-12 col-md-6 col-md-offset-3">
                <div className="input-group">
                  <input type="text" className="form-control search-bar" id="address" placeholder="Input your location..."
                    value={this.state.value} onChange={this.handleChange}

                    />
                  <span className="input-group-btn">
                    <button className="btn btn-default search-btn"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }
