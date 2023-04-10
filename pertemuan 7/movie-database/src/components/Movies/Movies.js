import {nanoid} from "nanoid";

import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";



function Movies(props) {
  const {movies, setMovies} = props;

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
