import { createSlice } from '@reduxjs/toolkit'



const orderSlice = createSlice({
        name: "order",
        initialState: {
            date : '',
            deliveryAddress : 0,
            deliveryTime : 0, 
            totalPrice : 0,
            dishes : []
        },
        reducers: {
            createOrder(state, action) {
                state.date = new Date().toDateString()
                state.deliveryAddress = action.payload.deliveryAddress
                state.RestaurantId = action.payload.RestaurantId
            },
            addDish(state, action) {
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
            }
        }
    }
)

export default orderSlice.reducer
export const {createOrder, addDish,deleteOrder} = orderSlice.actions