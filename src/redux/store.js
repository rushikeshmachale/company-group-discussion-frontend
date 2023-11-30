import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./reducers";


const store = configureStore({
    reducer:{
        employeeState:employeeReducer,
    },
})

export default store;