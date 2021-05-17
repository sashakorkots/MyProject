import { MENU_LOADED } from '../type'
import { restaurantUrl } from '../url'

export const loadCurrentRestrantInfo = (id) => (dispatch) => {
    fetch(`${restaurantUrl}${id}/menu`)
        .then(res => res.json())
        .then(menu => dispatch({type: MENU_LOADED, payload: menu }))
}

