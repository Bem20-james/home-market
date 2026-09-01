import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./authSlice";

const rootReducer = combineReducers({
  auth: userReducer,
});

export default rootReducer;
