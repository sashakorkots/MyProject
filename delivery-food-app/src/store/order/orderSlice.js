import { createSlice } from '@reduxjs/toolkit'



const orderSlice = createSlice({
        name: "order",
        initialState: {
            restaurantId : 0,
            date : '',
            deliveryAddress : 0,
            deliveryTime : 0, 
            totalPrice : 0,
            dishes : []
        },
        reducers: {
            createOrder(state, action) {
                state.restaurantId = action.payload.restaurantId
                state.date = new Date().toDateString()
                state.deliveryAddress = 0
                state.deliveryTime = 0 
                state.totalPrice = 0
                state.dishes = []                                
                
            },
            addDish(state, action) {
                state.totalPrice += action.payload.price
                const orderdish = state.dishes.find(d => d.id == action.payload.id)
                orderdish === undefined ? state.dishes
                    .push(
                    {
                        id: action.payload.id,
                        title: action.payload.title,
                        count: 1
                    }) : orderdish.count++
            },
            deleteOrder(state) {
                state.dishes = []
                state.totalPrice = 0
            }
        }
    }
)

export default orderSlice.reducer
export const {createOrder, addDish,deleteOrder} = orderSlice.actions