import { addDish,createOrder } from '../order/orderSlice'

export const newOrder = (restaurantId, deliveryAddress) => (dispatch) => {
        dispatch(createOrder({restaurantId, deliveryAddress}))
}

export const addnewDish = (dish, orderRestaurantId) => (dispatch) => {
    if (dish.restaurantId == orderRestaurantId){
        dispatch(addDish(dish))
    }
    else if (orderRestaurantId == 0 || window.confirm("Чи згодні, що замовлення з минулого реторану зникне")) {
        dispatch(createOrder({restaurantId : dish.restaurantId}))
        dispatch(addDish(dish))
    }

    
}
