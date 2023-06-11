import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.Styled.js";
import Image from "../ui/Button/Image/Image";
import Paragraph from "../ui/Button/Paragraph/Paragraph";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

function Hero() {
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && movie.videos.results[0].key;

  console.log(trailer);
  useEffect(() => {
    getDetailMovie();
  }, []);

  async function getTrendingMovies() {
    // Melakukan Fetch data dari API omdb.
    const response = await axios(ENDPOINTS.HERO);

    return response.data.results[0];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    const response = await axios(ENDPOINTS.TRENDING(id));
    // console.log(response.data);

    setMovie(response.data);
  }

  return (
    <StyledHero>
      <div>
        <section>
          <div class="left">
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <Paragraph>{movie.overview}</Paragraph>
            <Button
              as="a"
              href={`https://www.youtube.com/watch?v=${trailer}`}
              target="_blank"
            >
              Watch Movie
            </Button>
          </div>
          <div class="right">
            <Image
              src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.Title}
            />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
