import { MENU_LOADED } from '../type'
import { url } from '../url'

export const loadMenu = (id) => (dispatch) => {
    fetch(`${url}restaurant/${id}/menu`)
        .then(res => res.json())
        .then(menu => dispatch({type: MENU_LOADED, payload: menu }))
}
