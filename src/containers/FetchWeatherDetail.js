import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import WeatherDetail from '../components/WeatherDetail';

const mapStateToProps = state => {
  return {
    weather: state.weather
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWeather: (city) => dispatch(fetchWeather(city))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherDetail)
