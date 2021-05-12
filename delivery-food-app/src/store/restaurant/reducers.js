import { RESTAURANT_LOADED } from '../type'

const defaultState = [
    {
        id:1,
        title: ''

    }
]

const restaurantsReducer = (state = [], action) => {
     switch (action.type) {
        case RESTAURANT_LOADED: 
            return action.payload;
        default:
            return state;
     }   
}
export default restaurantsReducer;