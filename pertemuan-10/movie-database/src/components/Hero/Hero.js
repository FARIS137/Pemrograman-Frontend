import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.Styled.js";  
import Image from "../ui/Button/Image/Image";
import Paragraph from "../ui/Button/Paragraph/Paragraph";

function Hero() {
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    // Melakukan Fetch data dari API omdb.
    const response = await fetch(url);
    const data = await response.json();

    // Update state movie dengan data movie (hasil fetch)
    setMovie(data);
  }

 
  useEffect(() => {
    fetchMovie();
  }, []);
  console.log(movie);

  return (
    <StyledHero>
    <div>
      <section>
        <div class="left">
          <h2>{movie.Title}</h2>
          <h3>{movie.Genre}</h3>
          <Paragraph>{movie.Plot}</Paragraph>
          <Button variant="secondary" size="sm" >Watch</Button>
          <Button variant="secondary" size="md">Watch</Button>
          <Button variant="secondary" size="lg">Watch</Button>
        </div>
        <div class="right">
          <Image src={movie.Poster} alt={movie.Title}/>
        </div>
      </section>
    </div>
    </StyledHero>
  );
}

export default Hero;
