import { combineReducers } from 'redux'
import restaurantsReducer from './restaurant/reducers'

export default combineReducers({
    restaurants : restaurantsReducer
})