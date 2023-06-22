import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../Features/MoviesSlice/index";

function NowPlayingMovie() {
  const dispatch = useDispatch();
  // const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovie();
  }, []);

  async function fetchMovie() {
    const response = await axios(ENDPOINTS.NOWPLAYING);
    // setMovies(response.data.results);
    const movies = response.data.results;

    // setMovies(response.data.results);
    dispatch(updateMovies(movies));
  }

  return (
    <>
      <Hero />
      <Movies title="Now Playing" />
    </>
  );
}

export default NowPlayingMovie;
