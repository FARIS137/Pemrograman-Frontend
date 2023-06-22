import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../Features/MoviesSlice/index";

function TopRatedMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovie();
  }, []);

  async function fetchMovie() {
    const response = await axios(ENDPOINTS.TOPRATED);
    const movies = response.data.results;

    dispatch(updateMovies(movies));
  }

  return (
    <>
      <Hero />
      <Movies title="Top Rated" />
    </>
  );
}

export default TopRatedMovie;
