import {MENU_LOADED} from '../type'

const defaultState = 
    { 
        id : 1,
        title : '',
        menu : [
            {
                title: '',
                dishes: [
                    {
                        id: 1,
                        title: "",
                        cookingTime: 0,
                        price: 0,
                    }
                ]
            }
        ]
    }


const currentRestrantInfoReducer = (state = defaultState, action) => {
     switch (action.type) {
        case MENU_LOADED: 
            return action.payload;
        default:
            return state;
     }   
}
export default currentRestrantInfoReducer;