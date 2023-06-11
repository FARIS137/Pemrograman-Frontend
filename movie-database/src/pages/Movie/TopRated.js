import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie() {
  const [movies, setMovies] = useState([]);

  async function fetchMovie() {
    const response = await axios(ENDPOINTS.TOPRATED);
    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title="Top Rated" />
    </>
  );
}

export default TopRatedMovie;
