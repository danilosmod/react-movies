import React from "react";
import styled from "styled-components";
import MovieList from "./MovieList";

const MainStyle = styled.div`
  #banner {
      width: 100%
  }  
`

const Main = () => {
    return (
    <MainStyle>
        <img src="https://film-authority.com/wp-content/uploads/2022/03/big-trouble-in-little-china-517543541f76f.jpg" id="banner"/>
        <MovieList />
    </MainStyle>
    ) 
}

export default Main;