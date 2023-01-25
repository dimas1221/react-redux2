import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import customersReducers from "../Reducer/customersReducer";
import { combineReducers } from "redux"


const reducer = combineReducers({
    customersReducers : customersReducers,
})

const store = configureStore({
    reducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export default store