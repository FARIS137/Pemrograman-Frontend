import StyledMovie from "./Movie.Styled";
import Image from "../ui/Button/Image/Image";
import { Link } from "react-router-dom";

// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <Image
        src={
          movie.poster || `http://image.tmdb.org/t/p/w300/${movie.poster_path}`
        }
        alt={movie.title}
      />

      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
      <p>{movie.year || movie.release_date}</p>
    </StyledMovie>
  );
}

export default Movie;
