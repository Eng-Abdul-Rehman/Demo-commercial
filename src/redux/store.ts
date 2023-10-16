import { configureStore } from "@reduxjs/toolkit";
import CatagoriesReducer from "./Catagoriessclice"; 
import AddtoCartReducer from "./AddtoCartSclice";// Assuming "sclice" is the correct path

const store = configureStore({
  reducer: {
    CatagoriesType: CatagoriesReducer, // Use the correct name for the reducer
    AddtoCart: AddtoCartReducer
  },
});

export default store;