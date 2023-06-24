/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../Features/MoviesSlice/index";

function PopularMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    getpopularMovies();
  }, []);

  async function getpopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    const movies = response.data.results;
    dispatch(updateMovies(movies));
  }

  return (
    <>
      <Hero />
      <Movies title="Popular" />
    </>
  );
}

export default PopularMovie;
