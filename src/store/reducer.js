import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../counter/counterSlice.jsx'

export default configureStore({
    reducer: {
        counter: counterReducer
    }    
})