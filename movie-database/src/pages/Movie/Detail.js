<<<<<<< HEAD
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRecommendationMovies();
  }, []);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.DETAIL(id));
    setMovies(response.data.results);
  }
  return (
    <>
      <DetailMovie />
      <Movies movies={movies} title="Recommendation" />
    </>
  );
}
export default Detail;
=======
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRecommendationMovies();
  }, []);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.DETAIL(id));
    setMovies(response.data.results);
  }
  return (
    <>
      <DetailMovie />
      <Movies movies={movies} title="Recommendation" />
    </>
  );
}
export default Detail;
>>>>>>> 3e939cef5eb093677a5289482ab81722673aa120
