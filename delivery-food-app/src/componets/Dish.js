import React from "react"; 

function Dish({dish}) {
    return (
        <div className='dish'>
            <h4>{dish.title}</h4>
            <p >Час приготування: {dish.cookingTime} хв. </p>
            <p>Вартість: {dish.price} грн.</p>
        </div>
    );
}

export default Dish;