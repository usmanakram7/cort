import { UserInterface } from "../shared/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { usersListThunk } from "../thunks";

interface UsersState {
  data: UserInterface[];
  loading: boolean;
  error: any;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
};

export const UsersSlice = createSlice({
  name: "users-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(usersListThunk.pending, (state) => {
        state.loading = !state.data.length;
        state.error = null;
      })
      .addCase(usersListThunk.fulfilled, (state, { payload }) => {
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
      .addCase(usersListThunk.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error;
        }
        state.loading = false;
      });
  },
});
