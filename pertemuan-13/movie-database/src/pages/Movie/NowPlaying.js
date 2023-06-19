import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlayingMovie() {
  const [movies, setMovies] = useState([]);

  async function fetchMovie() {
    const response = await axios(ENDPOINTS.NOWPLAYING);
    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title="Now Playing" />
    </>
  );
}

export default NowPlayingMovie;
