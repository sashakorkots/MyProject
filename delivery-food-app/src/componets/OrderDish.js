import redux from 'redux'

function OrderDish({orderDish}) {
    return (
        <div className='order-dish border'>
            <p className='counter'>({orderDish.count})</p>
            <p>{orderDish.title}</p>
        </div>       
    )
}

export default OrderDish