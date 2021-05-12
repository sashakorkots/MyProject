import React from "react";  
import { useSelector } from "react-redux";
import Restaurant from './Restaurant'

function RestaurantsList() {

    let restaurants = useSelector(st => st.restaurants);

    return (
        <div id='restaurants'>
            {
                restaurants.map(r => <Restaurant key={r.id} restaurant={r} />)
            }
        </div>
    );
}
export default RestaurantsList;