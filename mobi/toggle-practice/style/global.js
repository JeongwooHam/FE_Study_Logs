import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    html{
        font-family: "Neucha", cursive;
        background-color: #FAF0E4;
    }
    ul{
        list-style: none;
    }
    img{
        height: 400px;
        border-radius: 16px;
    }
`;

export default GlobalStyles;
