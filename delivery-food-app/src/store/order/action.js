import { addDish,createOrder } from '../order/orderSlice'

export const newOrder = (RestaurantId, deliveryAddress) => (dispatch) => {
        dispatch(createOrder({RestaurantId, deliveryAddress}))
}

export const addnewDish = (dish) => (dispatch) => {
    dispatch(addDish(dish))
}
