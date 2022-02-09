import React from "react";
import styled from "styled-components";
import Logo from "../../assets/jeans.png"


const Header = ({ name }) => {

    return (
        <HeaderStyled>
            <ImgLogo src={Logo} alt='Logotipo da loja' />
            <HeaderTitle>{name}</HeaderTitle>
            <HeaderNav>
                <HeaderButton>Home</HeaderButton>
                <HeaderButton>About Us</HeaderButton>
            </HeaderNav>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    color: white;
    font-size: 40px;
    background: #DC872C;
    height: 10vh;
    padding: 0 12px;
    display: flex;
    align-items: center;
`;

const ImgLogo = styled.img`
    height: 5vh;
    border: solid 5px #FFF;
    border-radius: 50%;
    padding: 10px;
    background: #666;
`;

const HeaderTitle = styled.h3`
    margin-left: 20px;
    font-size: 3rem;
`;

const HeaderNav = styled.nav`
    margin-left: auto;
`;

const HeaderButton = styled.button`
    font-family: 'Pirata One', cursive;
    font-size: 1.3rem;
    margin-left: 5px;
`;

export default Header;
