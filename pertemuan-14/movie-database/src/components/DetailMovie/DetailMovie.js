/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../ui/Button/Button";
import styled from "styled-components";
import ENDPOINTS from "../../utils/constants/endpoints";

const StyledDetailMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 1rem;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    /* overflow: hidden; */
  }
  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
    font-size: 0.8rem;
  }
  // Medium Screen: 768px
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    .poster {
      flex-basis: 30%;
    }
    .info {
      flex-basis: 60%;
    }
  }
  // Large Screen
  @media screen and (min-width: 992px) {
  }
`;

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && movie.videos.results[0].key;

  async function getDetailMovie() {
    const response = await axios(ENDPOINTS.TRENDING(id));
    setMovie(response.data);
  }

  useEffect(() => {
    getDetailMovie();
  }, [id]);

  // console.log(movie);

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <Button
          as="a"
          href={`https://www.youtube.com/watch?v=${trailer}`}
          target="_blank"
        >
          Watch
        </Button>
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;
