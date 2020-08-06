import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather, fetchHistory } from '../actions'
import FetchWeatherDetail from '../containers/FetchWeatherDetail'
import SearchHistory from '../containers/SearchHistory'

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
    this.props.fetchHistory(this.state.city)
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
        <FetchWeatherDetail />
        <SearchHistory />

      </form>
    )
  }
}


export default connect(null, { fetchWeather, fetchHistory })(SearchBar)
