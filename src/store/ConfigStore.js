import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Store"
export default configureStore ({
    reducer: {
        post : postReducer
    }
})