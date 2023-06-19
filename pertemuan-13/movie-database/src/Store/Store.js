import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../Features/MoviesSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
})
export default store;