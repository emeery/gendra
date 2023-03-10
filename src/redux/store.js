import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import charactersSlice from './api/characterSlice';
export const store = configureStore({
    reducer: {
        charactersSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
})

