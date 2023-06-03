import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.Styled.js";  
import Image from "../ui/Button/Image/Image";
import Paragraph from "../ui/Button/Paragraph/Paragraph";
import axios from "axios";

function Hero() {
  const [movie, setMovie] = useState("");
  // eslint-disable-next-line no-unused-vars
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(",");
  const trailer = movie && movie.videos.results[0].key;

console.log(trailer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() =>{
    getDetailMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getTrendingMovies() {
    // eslint-disable-next-line no-template-curly-in-string
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    // Melakukan Fetch data dari API omdb.
    const response = await axios(url);
    console.log(response.data.results[0]);
   return response.data.results[0];
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    console.log(response.data);
    
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
          >Watch Movie</Button>
          
        </div>
        <div class="right">
          <Image src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.Title}/>
        </div>
      </section>
    </div>
    </StyledHero>
  );
}

export default Hero;
