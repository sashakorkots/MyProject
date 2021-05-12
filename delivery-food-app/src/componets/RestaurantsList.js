import React from "react";  
import { useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import Restaurant from './Restaurant'

function RestaurantsList() {

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