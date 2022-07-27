
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import authReducer from "./auth/authSlice";
import messageReducer from "./auth/messageSlice";

export const store = configureStore({
    reducer:{
      form:formReducer,
      auth:authReducer,
      message:messageReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  })