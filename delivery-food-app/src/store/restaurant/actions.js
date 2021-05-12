import { RESTAURANT_LOADED } from '../type'
import { url } from '../url'

export const loadRestaurant = () => (dispatch) => {
    fetch(`${url}restaurants`)
        .then(res => res.json())
        .then(restaurants => dispatch({type: RESTAURANT_LOADED, payload: restaurants }))
}
