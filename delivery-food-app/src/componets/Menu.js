import React, { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {loadCurrentRestrantInfo} from '../store/currentRestrantInfo/action';
import {newOrder} from '../store/order/action'

import Dish from './Dish'

function Menu() {
    let {id} = useParams()
    let restrantInfo = useSelector(state => state.currentRestrantInfo)

    const dispatch = useDispatch()    

    useEffect(() => {
        dispatch(loadCurrentRestrantInfo(id))
    },[id,dispatch])

    return (
        <div className='menu'>
            <h2>{restrantInfo.title}</h2>
            {
                restrantInfo.menu.map((type, i) => 
                    <div className='dish-type-section' key={i}>
                        <h3>{type.title}</h3>
                        <section className='dish-section'>
                            {type.dishes.map(d => <Dish key={d.id} dish={d} />)}
                        </section>
                    </div>  
                )              
            }                            
        </div>
    )
}

export default Menu;