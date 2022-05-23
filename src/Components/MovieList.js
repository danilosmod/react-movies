import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiKey = process.env.REACT_APP_MOVIES_KEY;

const MovieListStyle = styled.div`
  width: 65%;
  margin: 0 auto;

  h2 {
    text-align: center;
  }

  img {
    width: 200px;
  }

  p {
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 0.5rem;
    row-gap: 0.5rem;
  }

  li {
    border: solid 1px #808080;
    padding: 1rem;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const img_url = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <MovieListStyle>
      <h2>Filmes populares</h2>
      <ul>
        {movies.map((movie) => {
          return (
            <Link to={`/moviedetails/${movie.id}`}>
              <li key={movie.id}>
                <img src={`${img_url}${movie.poster_path}`} />
                <p>Título: {movie.title}</p>
                <p>Nota: {movie.vote_average}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </MovieListStyle>
  );
};

export default MovieList;
