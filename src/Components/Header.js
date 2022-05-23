import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.h1`
    color: white;
    background-color: #808080;
    padding: 1rem;
    text-align: center;
    margin-bottom: 0;
`

const Header = () => {
    return <HeaderStyle>Home</HeaderStyle>
}

export default Header;