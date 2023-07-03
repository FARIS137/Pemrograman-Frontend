import { configureStore } from "@reduxjs/toolkit";
import provincesReducer from "../Features/ProvincesSlice";

const store = configureStore({
    reducer: {
        provinces: provincesReducer,
    },
})
export default store;