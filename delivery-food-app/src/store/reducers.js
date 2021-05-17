import { combineReducers } from 'redux'
import restaurantsReducer from './restaurant/reducers'
import currentRestrantInfoReducer from './currentRestrantInfo/reducers'
import orderSlice from './order/orderSlice'
import ClientSlice from './client/clientSlice'

export default combineReducers({
    restaurants : restaurantsReducer,
    currentRestrantInfo : currentRestrantInfoReducer,
    currentOrder : orderSlice,
    currentClient : ClientSlice
})