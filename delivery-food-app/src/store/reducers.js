import { combineReducers } from 'redux'
import restaurantsReducer from './restaurant/reducers'
import currentRestrantInfoReducer from './currentRestrantInfo/reducers'
import orderSlice from './order/orderSlice'
import ClientSlice from './client/clientSlice'
import pathSlice from './path/pathSlice'

export default combineReducers({
    restaurants : restaurantsReducer,
    currentRestrantInfo : currentRestrantInfoReducer,
    currentOrder : orderSlice,
    currentClient : ClientSlice,
    path : pathSlice
})