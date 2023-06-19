import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie() {
  //Membuat State Movies
  const [movies, setMovies] = useState([]);

  async function getpopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    setMovies(response.data.results);
  }

  useEffect(() => {
    getpopularMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title="Popular" />
    </>
  );
}

export default PopularMovie;
