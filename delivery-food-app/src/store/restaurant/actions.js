import { RESTAURANT_LOADED } from '../type'
import { restaurantUrl } from '../url'

export const loadRestaurant = () => (dispatch) => {
    fetch(`${restaurantUrl}`)
        .then(res => res.json())
        .then(restaurants => dispatch({type: RESTAURANT_LOADED, payload: restaurants }))
}
