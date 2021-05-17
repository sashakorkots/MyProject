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
            RegisterClient(state, {id, name,surname,email,order}) {
                state.id = id
                state.name = name
                state.surname = surname
                state.email = email
                state.order = order
            },
            LoginClient(state, {id, name,surname,email,order}) {
                state.id = id
                state.name = name
                state.surname = surname
                state.email = email
                state.order = order
            }
        }
})

export default clientSlice.reducer
export const {RegisterClient, LoginClient} = clientSlice.actions