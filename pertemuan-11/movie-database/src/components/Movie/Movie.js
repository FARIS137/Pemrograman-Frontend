import StyledMovie from "./Movie.Styled";
import Image from "../ui/Button/Image/Image";

// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <Image src={movie.poster || `http://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
      alt={movie.title}/>
      
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      </StyledMovie>
  );
}

export default Movie;
