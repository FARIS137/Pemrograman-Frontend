/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { useEffect } from "react";
import { updateMovies } from "../Features/MoviesSlice";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.movies.moviesLocal);

  useEffect(() => {
    getHomeMovies();
  }, []);

  async function getHomeMovies() {
    dispatch(updateMovies(data));
  }
  return (
    <>
      <Hero />
      <Movies title="Latest Movie" />
    </>
  );
}

export default Home;
