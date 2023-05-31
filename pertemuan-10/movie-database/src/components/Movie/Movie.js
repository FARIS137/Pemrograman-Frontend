import StyledMovie from "./Movie.Styled";
import Image from "../ui/Button/Image/Image";

// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <Image src={movie.poster} alt={movie.title}/>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      </StyledMovie>
  );
}

export default Movie;
