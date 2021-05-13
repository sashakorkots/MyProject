import { combineReducers } from 'redux'
import restaurantsReducer from './restaurant/reducers'
import currentRestrantInfoReducer from './currentRestrantInfo/reducers'

export default combineReducers({
    restaurants : restaurantsReducer,
    currentRestrantInfo : currentRestrantInfoReducer
})