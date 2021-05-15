import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {addnewDish} from '../store/order/action'

function Dish({dish}) {
    const order = useSelector(state => state.currentOrder)
    const dispatch = useDispatch();

    const AddToOrder = () => {
        dispatch(addnewDish(dish, order.restaurantId))
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