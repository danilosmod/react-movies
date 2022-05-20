import React from "react";
import styled from "styled-components";

const MovieListStyle = styled.div`
width: 65%;
margin: 0 auto;

h2{

}

img{

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
   
}
`

const MovieList = () => {
    return (
        <MovieListStyle>
            <h2>Filmes populares</h2>
            <ul>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/a/af/Big_trouble_little_china.jpg" alt="Capa do filme"/>
                    <p>Título: Aventureiros do Bairro Proibido</p>
                    <p>Nota: 10</p>
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/a/af/Big_trouble_little_china.jpg" alt="Capa do filme"/>
                    <p>Título: Aventureiros do Bairro Proibido</p>
                    <p>Nota: 10</p>
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/a/af/Big_trouble_little_china.jpg" alt="Capa do filme"/>
                    <p>Título: Aventureiros do Bairro Proibido</p>
                    <p>Nota: 10</p>
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/a/af/Big_trouble_little_china.jpg" alt="Capa do filme"/>
                    <p>Título: Aventureiros do Bairro Proibido</p>
                    <p>Nota: 10</p>
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/a/af/Big_trouble_little_china.jpg" alt="Capa do filme"/>
                    <p>Título: Aventureiros do Bairro Proibido</p>
                    <p>Nota: 10</p>
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/a/af/Big_trouble_little_china.jpg" alt="Capa do filme"/>
                    <p>Título: Aventureiros do Bairro Proibido</p>
                    <p>Nota: 10</p>
                </li>
            </ul>
        </MovieListStyle>
    )
}

export default MovieList;