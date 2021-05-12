import React from "react"; 

function Restaurant({restaurant}) {
    return (
        <div className='restaurant'>
            <h3>{restaurant.title}</h3>
            <span>{restaurant.address}</span>
            <span>{restaurant.openingTime}</span>
        </div>
    )
}

export default Restaurant;