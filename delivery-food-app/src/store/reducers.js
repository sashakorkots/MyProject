import { combineReducers } from 'redux'
import restaurantsReducer from './restaurant/reducers'
import currentRestrantInfoReducer from './currentRestrantInfo/reducers'
import orderSlice from './order/orderSlice'

export default combineReducers({
    restaurants : restaurantsReducer,
    currentRestrantInfo : currentRestrantInfoReducer,
    currentOrder : orderSlice
})