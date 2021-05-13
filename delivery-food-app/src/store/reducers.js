import { combineReducers } from 'redux'
import restaurantsReducer from './restaurant/reducers'
import menuReducer from './menu/reducers'

export default combineReducers({
    restaurants : restaurantsReducer,
    menu : menuReducer
})