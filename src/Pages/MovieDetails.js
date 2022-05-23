import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

const apiKey = process.env.REACT_APP_MOVIES_KEY;

const Container = styled.div`
  .menu {
    background-color: #808080;
    color: white;
    text-align: center;
    justify-content: center;
    padding-top: 1.5rem;
  }
  .menu_links {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0 auto;
  }

  .menu_links > li {
    margin-bottom: 1rem;
  }

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img {
    width: 250px;
  }

  .content {
    margin-left: 2rem;
  }

  span {
    font-weight: bold;
  }

  button {
    background-color: #c62823;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #ed413b;
  }

  a {
    text-decoration: none;
    color: #fff;
    margin-right: 20px;
  }
`;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const img_url = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        const { poster_path, title, overview, release_date, vote_average } =
          data;

        const movie = {
          id,
          image: `${img_url}${poster_path}`,
          title,
          sinopse: overview,
          releaseDate: release_date,
          score: vote_average,
        };
        console.log(movie);
        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <nav class="menu">
        <h1>{movie.title}</h1>
        <ul class="menu_links">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>Favoritos</li>
        </ul>
      </nav>
      <main class="main">
        <img src={movie.image} class="img" />
        <div class="content">
          <p>
            <span>Título:</span> {movie.title}
          </p>
          <p>
            <span>Sinopse:</span> {movie.sinopse}
          </p>
          <p>
            <span>Data de lançamento:</span> {movie.releaseDate}
          </p>
          <p>
            <span>Nota:</span> {movie.score}
          </p>
          <Link to="/">
            <button>Voltar para a Home</button>
          </Link>
        </div>
      </main>
    </Container>
  );
};

export default MovieDetails;
