
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import authReducer from "./auth/authSlice";
import messageReducer from "./auth/messageSlice";
import formStepSlice from "./formStepSlice";

export const store = configureStore({
    reducer:{
      form:formReducer,
      auth:authReducer,
      message:messageReducer,
      formStep:formStepSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  })