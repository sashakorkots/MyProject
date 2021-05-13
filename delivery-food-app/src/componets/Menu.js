import React, { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {loadMenu} from '../store/menu/action';
import Dish from './Dish'

function Menu() {
    let {id} = useParams()
    const dispatch = useDispatch()    
    let menu = useSelector(state => state.menu)

    useEffect(() => {
        dispatch(loadMenu(id))
    },[id])

    return (
        <div className='menu'>
            {
                menu.map(type => 
                    <div>
                        <h3>{type.title}</h3>
                        <section className='dish-type-section'>
                            {type.dishes.map(d => <Dish dish={d} />)}
                        </section>
                    </div>  
                )              
            }                            
        </div>
    )
}

export default Menu;