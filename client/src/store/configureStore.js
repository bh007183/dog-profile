import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import reducer from "./reducer"
import api from "./middleware/apiCall.js"

export default function(){
    return configureStore({
        reducer,
        middleware:[...getDefaultMiddleware(), api]
    })
}