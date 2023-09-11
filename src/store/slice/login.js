import { createSlice } from '@reduxjs/toolkit'

const data = localStorage.getItem("isLoggedIn") !== null ? JSON.parse(localStorage.getItem("isLoggedIn")) : false

const initialState = {
    value: data,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginStatus: (state, data) => {
            state.value = data.payload
            localStorage.setItem("isLoggedIn", JSON.stringify(state.value))
        },
    },
})

export const { loginStatus } = loginSlice.actions

export default loginSlice.reducer