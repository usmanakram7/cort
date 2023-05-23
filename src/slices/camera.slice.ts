import { CamerasInterface } from "../shared/interfaces/CamerasInterface";
import { createSlice } from "@reduxjs/toolkit";
import { DeleteCameraThunk, camerasListThunk } from "../thunks/camera.thunk";

interface UsersState {
  data: CamerasInterface[];
  loading: boolean;
  error: any;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
};

export const CameraSlice = createSlice({
  name: "cameras-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Clinics
    builder
      .addCase(camerasListThunk.pending, (state) => {
        state.loading = !state.data.length;
        state.error = null;
      })
      .addCase(camerasListThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          if (payload.length) {
            if (payload[0].user) {
              state.data = payload[0].user.filter((item) => !item.deleted);
            }
          }
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(camerasListThunk.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error;
        }
        state.loading = false;
      });

    builder
      .addCase(DeleteCameraThunk.pending, (state) => {
        state.loading = !state.data.length;
        state.error = null;
      })
      .addCase(DeleteCameraThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(DeleteCameraThunk.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error;
        }
        state.loading = false;
      });
  },
});
