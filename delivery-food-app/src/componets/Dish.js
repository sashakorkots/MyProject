import React from "react"; 
import { useDispatch } from "react-redux";
import {addnewDish} from '../store/order/action'

function Dish({dish}) {
    
    const dispatch = useDispatch();

    const AddToOrder = () => {
        dispatch(addnewDish(dish))
    }

    return (
        <div onClick={AddToOrder} className='dish border' >
            <h4>{dish.title}</h4>
            <p>{dish.cookingTime} хв. </p>
            <p>{dish.price} грн.</p>
        </div>
    );
}

export default Dish;