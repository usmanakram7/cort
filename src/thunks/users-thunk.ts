import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api";

export const usersListThunk = createAsyncThunk(
    "users-thunk",
    async (data, thunkApi: any) => {
        try {
            const response = await API.users.list();
            return response.data;
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.response)
        }
    }
)