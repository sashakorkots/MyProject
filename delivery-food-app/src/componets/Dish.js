import React from "react"; 

function Dish({dish}) {
    return (
        <div className='dish'>
            <h4>{dish.title}</h4>
            <p>{dish.cookingTime} хв. </p>
            <p>{dish.price} грн.</p>
        </div>
    );
}

export default Dish;