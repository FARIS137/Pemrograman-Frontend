import axios from 'axios';
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";

function PopularMovie() {
  // eslint-disable-next-line no-unused-vars
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=f1ac2165ff93884cbed80a7f73613552`;

  //Membuat State Movies
  const [movies, setMovies] = useState([]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchMovie() {
    const response = await axios(URL);
    setMovies(response.data.results);
  }

useEffect(() => {
  fetchMovie();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


console.log(movies);
  return (
    <>
      <Movies movies={movies} setMovies={setMovies} />
    </>
  );
  }

export default PopularMovie;
