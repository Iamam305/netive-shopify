
import { configureStore } from "@reduxjs/toolkit";
import {reducer} from './formSlice'

export const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  })