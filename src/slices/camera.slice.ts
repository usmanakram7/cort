import { CamerasInterface } from "../shared/interfaces/CamerasInterface";
import { createSlice } from "@reduxjs/toolkit";
import { DeleteCameraThunk, CamerasListThunk } from "../thunks/camera.thunk";

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
    builder
      .addCase(CamerasListThunk.pending, (state) => {
        state.loading = !state.data.length;
        state.error = null;
      })
      .addCase(CamerasListThunk.fulfilled, (state, { payload }) => {
        state.data = payload ?? [];
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
      .addCase(CamerasListThunk.rejected, (state, action) => {
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
