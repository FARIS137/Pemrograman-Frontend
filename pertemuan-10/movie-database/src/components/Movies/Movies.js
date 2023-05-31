import { nanoid } from "nanoid";
import Movie from "../Movie/Movie";
import StyledMovies from "./Movies.Styled.js";


function Movies(props) {
  // Destructing props: state movies
  const { movies, setMovies } = props;

  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "Jigsaw Spiral",
      year: 2021,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    /**
     * Update state movies: setMovies
     * Melakukan teknik spread untuk copy dan merge array
     */
    setMovies([...movies, movie]);
  }

  return (
    <StyledMovies>
    
      <div>
        <section>
          <h2>Latest Movies</h2>
          <div class="container">
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
          <button onClick={handleClick}>Add Movie</button>
        </section>
      </div>
    
    </StyledMovies>
  );
}

export default Movies;
