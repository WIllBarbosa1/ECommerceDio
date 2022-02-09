import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        color: #666;
        padding: 0;
        margin: 0;
        font-family: 'Pirata One', cursive;
        font-size: 20px;
    };
    body::-webkit-scrollbar {
        background: #666;
        width: 0.5vw;
    };
    body::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #000;
    };
`

export default GlobalStyle