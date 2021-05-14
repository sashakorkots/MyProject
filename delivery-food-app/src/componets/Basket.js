import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import {addnewDish} from '../store/order/action'
import Dish from './Dish'

function Basket() {
    
    const basket = useSelector(state => state.currentOrder)

    return (
        <div className='basket-list'>
            <h2>Basket</h2>
            <ol>
                {
                    basket.dishes.map(dish => <li>{dish.title} ({dish.count})</li> )
                }
            </ol>
        </div>
    )
}

export default Basket