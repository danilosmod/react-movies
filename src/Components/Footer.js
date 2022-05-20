import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
    color: white;
    background-color: #808080;
    padding: 1rem;
    text-align: center;
`

const Footer = () => {
    return <FooterStyle>
        <p>React Movies @ 2022. Todos os direitos 
reservados.</p>
    </FooterStyle>
}

export default Footer;