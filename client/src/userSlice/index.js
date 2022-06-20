import { createSlice, configureStore } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLogged: false
    },
    reducers: {
        login(state, { payload }) {
            return { ...state, isLogged: true, user: payload }
        },
        logout(state) {
            return { ...state, isLogged: false, user: null }
        }
    }
})

export const { login, logout } = userSlice.actions

export const store = configureStore({
    reducer: userSlice.reducer
})



