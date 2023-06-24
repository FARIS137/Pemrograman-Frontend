import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

const moviesSlice = createSlice({
    name: "Movies slice",
    initialState: {
        movies: data,
        moviesLocal: data,
    },
    reducers: {
        addMovie(state, action) {
            state.moviesLocal.push(action.payload);
        },
        updateMovies(state, action){
            state.movies = action.payload;
        }
    },
});

const { addMovie, updateMovies } = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

export {addMovie,updateMovies};
export default moviesReducer;