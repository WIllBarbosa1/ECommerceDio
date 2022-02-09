import React from "react";
import styled from "styled-components";


const Footer = () => {

    return (
        <FooterStyled>
            Feito em 2022
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    color: white;
    font-size: 1rem;
    background: #DC872C;
    height: 5vh;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Footer;
