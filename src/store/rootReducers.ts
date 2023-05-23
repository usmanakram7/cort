import { CameraSlice, UsersSlice } from "../slices";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  users: UsersSlice.reducer,
  camera: CameraSlice.reducer,
});
