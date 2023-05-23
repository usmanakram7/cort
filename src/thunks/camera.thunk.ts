import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api";

export const camerasListThunk = createAsyncThunk(
  "cameras-thunk",
  async (data, thunkApi: any) => {
    try {
      const response = await API.cameras.list();
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const DeleteCameraThunk = createAsyncThunk(
  "Delete-Camera-thunk",
  async (id: string, thunkApi) => {
    try {
      const response = await API.cameras.deleteById(id);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);
