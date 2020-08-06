
import { connect } from 'react-redux';
import { fetchWeather, fetchHistory } from '../actions/index';
import History from '../components/History';

const mapStateToProps = state => {

  return {

    cityList: state.cityList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHistory: (city) => dispatch(fetchHistory(city))

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
