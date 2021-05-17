import { createSlice } from '@reduxjs/toolkit'
import react from 'react'

const pathSlice = createSlice({
    name : 'path', 
    initialState : {
        path : 'register'
    },
    reducers : {
        toRestaurant(state) {
            
            state.path = 'home'
            
        },
        toRegister(state) {
            state.path = 'register'
        }
    }
})

export default pathSlice.reducer 
export const {toRegister, toRestaurant} = pathSlice.actions 