import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../Features/MoviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
  // const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.DETAIL(id));
    const movies = response.data.results;
    dispatch(updateMovies(movies));
  }
  return (
    <>
      <DetailMovie />
      <Movies  title="Recommendation" />
    </>
  );
}
export default Detail;
