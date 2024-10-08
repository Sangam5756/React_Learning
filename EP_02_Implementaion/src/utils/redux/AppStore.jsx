import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import menuReducer from "./menuSlice"

const AppStore = configureStore({
    reducer:{
       cart: cartReducer,
       menu: menuReducer
    }
})

export default AppStore