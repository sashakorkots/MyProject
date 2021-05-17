import { createSlice } from '@reduxjs/toolkit'

const clientSlice = createSlice({
    name: "client",
        initialState: {
            id : 0,
            name : '',
            surname : '',
            email : '',
            order : []
        },
        reducers: {
            RegisterClient(state, action) {

            },
            LoginClient(state, action) {

            }
        }
})

export default clientSlice.reducer
export const {RegisterClient, LoginClient} = clientSlice.actions