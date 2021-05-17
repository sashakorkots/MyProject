import React, { useEffect } from "react";  
import { useDispatch, useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import Restaurant from './Restaurant'
import {sigIn} from '../store/client/action'

function RestaurantsList() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sigIn())
    },[])
    let restaurants = useSelector(st => st.restaurants);

    return (
        <div id='restaurants'>
            {
                restaurants.map(r => 
                    <NavLink to={`/restaurant/${r.id}`}>
                        <Restaurant key={r.id} restaurant={r} />
                    </NavLink>)
            }
        </div>
    );
}
export default RestaurantsList;