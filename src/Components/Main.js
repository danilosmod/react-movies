import React from "react";
import styled from "styled-components";
import MovieList from "./MovieList";
import banner from "../img/banner.jpg";

const MainStyle = styled.div`
  #banner {
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Main = () => {
  return (
    <MainStyle>
      <img src={banner} id="banner" />
      <MovieList />
    </MainStyle>
  );
};

export default Main;
