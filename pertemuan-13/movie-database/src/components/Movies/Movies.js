import Movie from "../Movie/Movie";
import StyledMovies from "./Movies.Styled.js";
import { useSelector } from "react-redux";

function Movies(props) {
  // Destructing props: state movies
  const { title } = props;

  const movies = useSelector((store) => store.movies.movies);

  return (
    <StyledMovies>
      <div>
        <section>
          <h2>{title}</h2>
          <div class="container">
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      </div>
    </StyledMovies>
  );
}

export default Movies;
