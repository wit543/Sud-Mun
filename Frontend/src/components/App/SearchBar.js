import React, { Component } from 'react'
export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      value:''
    }
  }
  handleChange(e) {
    this.setState({value: e.target.value});
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
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-xs-12 col-md-6 col-md-offset-3">
              <div className="input-group">
                <input type="text" className="form-control" id="address" placeholder="Input your location..."
                  value={this.state.value}
                  onChange={this.handleChange} />
                <span className="input-group-btn">
                <button className="btn btn-secondary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
              </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
