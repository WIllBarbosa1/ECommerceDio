import React from "react";
import styled from "styled-components";


const Card = ({ children }) => {

    return (
        <CardStyled>{children}</CardStyled>
    )
}

const CardStyled = styled.div`
    color: #666;
    font-size: 1.5rem;
    background: #FFF;
    width: 90%;
    height: 80%;
    padding: 12px;
    box-shadow: 3px 1px 1px black;
`;

export default Card;
