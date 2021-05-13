import {MENU_LOADED} from '../type'

const defaultState = [
    {
        title: '',
        dishes: [
            {
                id: 1,
                title: "",
                cookingTime: "00:00:00",
                price: 0,
            }
        ]
    }
]

const menuReducer = (state = defaultState, action) => {
     switch (action.type) {
        case MENU_LOADED: 
            return action.payload;
        default:
            return state;
     }   
}
export default menuReducer;