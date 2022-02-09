import React from "react";
import styled from "styled-components";
import Card from "./Card";


const BodyCard = ({ children }) => {

    return (
        <CardStyled>
            <Card>
                {children}
            </Card>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    color: white;
    background: #666;
    min-height: 85vh;
    padding: 3% 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default BodyCard;
