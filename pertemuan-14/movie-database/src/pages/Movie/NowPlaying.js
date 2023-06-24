/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../Features/MoviesSlice/index";

function NowPlayingMovie() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovie();
  }, []);

  async function fetchMovie() {
    const response = await axios(ENDPOINTS.NOWPLAYING);
    const movies = response.data.results;

    dispatch(updateMovies(movies));
  }

  return (
    <>
      <Hero />
      <Movies title="Now Playing" />
    </>
  );
}

export default NowPlayingMovie;
