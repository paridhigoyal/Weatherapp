import { combineReducers } from 'redux';
import weather from './weather';
import cityList from './cityList';


export default combineReducers({
    weather,
    cityList
});