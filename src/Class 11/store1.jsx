import { configureStore } from "@reduxjs/toolkit";
import { cartSlicer } from "./CartSlicer";

export const store1=configureStore({
    reducer:{
        "cart":cartSlicer.reducer
    }
})