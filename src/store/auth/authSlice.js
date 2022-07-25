import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../../service/authService'


const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const registerUser = createAsyncThunk('auth/registerUser', async (user, thunkApi) => {
    try {
        return await authService.registerUser(user)
    }
    catch (err) {

        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkApi.rejectWithValue

    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isSuccess = false
            state.isLoading = false
            state.isError = false
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(registerUser.fulfilled, (state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(registerUser.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null

        })


    }
});

export const { reset } = authSlice.actions

export default authSlice.reducer