
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import authReducer from "./auth/authSlice";
import messageReducer from "./auth/messageSlice";

export const store = configureStore({
    reducer:{
      formReducer,
      authReducer,
      messageReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  })