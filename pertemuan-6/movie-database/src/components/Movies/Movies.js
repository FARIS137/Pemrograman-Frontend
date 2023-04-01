import {nanoid} from "nanoid";
import { useState } from "react";

import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import data from "../../utils/constants/data";


function Movies() {
  const [movies, setMovies] = useState(data);

  function handleClick() {
    const newfile ={
      id : nanoid(),
      title: "jigsaw ",
      year: 2021,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies ([ ...movies, newfile])
  }

  return (
    <div>
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {movies.map(function (movie) {
            return <Movie  key={movie.id} movie={movie}/>
          })}
          
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
    </div>
  );
}

export default Movies;
