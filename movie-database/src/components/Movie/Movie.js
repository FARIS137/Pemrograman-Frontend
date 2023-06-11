import StyledMovie from "./Movie.Styled";
import Image from "../ui/Button/Image/Image";
<<<<<<< HEAD
import { Link} from "react-router-dom";
=======
>>>>>>> 3e939cef5eb093677a5289482ab81722673aa120

// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <Image src={movie.poster || `http://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
      alt={movie.title}/>
      
<<<<<<< HEAD
     <Link to={`/movie/${movie.id}`}>
      <h3>{movie.title}</h3>
      </Link> 
      <p>{movie.year || movie.release_date}</p>
=======
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
>>>>>>> 3e939cef5eb093677a5289482ab81722673aa120
      </StyledMovie>
  );
}

export default Movie;
