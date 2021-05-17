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
            Sign(state, action) {
                const {id, name, surname, email, order} = action.payload
                state.id = id
                state.name = name
                state.surname = surname
                state.email = email
                state.order = order == null ? [] : order
            }
        }
})

export default clientSlice.reducer
export const { Sign } = clientSlice.actions