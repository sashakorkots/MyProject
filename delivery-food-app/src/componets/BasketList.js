import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import {addnewDish} from '../store/order/action'
import Dish from './Dish'
import OrderDish from './OrderDish'

function BasketList() {
    
    const basket = useSelector(state => state.currentOrder)

    return (
        <div className='basket-list border'>
            <h2>Basket</h2>
            {
                basket.dishes.map(dish => <OrderDish  orderDish={dish}/> )
            }
            <p>Total price: {basket.totalPrice} грн.</p>
        </div>
    )
}

export default BasketList