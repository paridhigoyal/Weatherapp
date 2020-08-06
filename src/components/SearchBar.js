import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions'
import FetchWeatherDetail from '../containers/FetchWeatherDetail'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      main: undefined
    }
  }

  onInputChange = event => this.setState({ city: event.target.value })

  onFormSubmit = event => {
    event.preventDefault()

    this.props.fetchWeather(this.state.city)
    this.setState({ city: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text"
          placeholder="...cities"
          value={this.state.city}
          onChange={this.onInputChange} />
        <button type="submit" >Submit</button>
        <FetchWeatherDetail></FetchWeatherDetail>

      </form>
    )
  }
}


export default connect(null, { fetchWeather })(SearchBar)
