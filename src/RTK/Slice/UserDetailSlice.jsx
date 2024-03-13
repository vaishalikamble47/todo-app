import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUserAsync = createAsyncThunk("createUser", async (data) => {
    const result = await axios.post('http://localhost:5000/UserDatalist', data)
    return result
})
export const getUserAsync = createAsyncThunk("getUser", async () => {
    const result = await axios.get('http://localhost:5000/UserDatalist')
    return result.data
})
export const deleteUserAsync = createAsyncThunk("deleteUser", async (id) => {
    const result = await axios.delete(`http://localhost:5000/UserDatalist/${id}`)
    return result
})
export const updateUserAsync = createAsyncThunk("updateUser", async (userdata) => {
    const {id,data}=userdata
    try {
        const response = await axios.put(`http://localhost:5000/UserDatalist/${id}`, data);
 
      return response.data;
    } catch (error) {
      throw error;
    }
  });

const initialState = {
    userInfo: []
};
const userDetailSlice = createSlice({
    name: "userdata",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserAsync.fulfilled, (state, action) => {
            })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                state.userInfo = action.payload
            })
            .addCase(deleteUserAsync.fulfilled, (state, action) => {
           
            })
            .addCase(updateUserAsync.fulfilled, (state, action) => {
           
            })

    }
})
export default userDetailSlice.reducer