import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        list-style: none;
    }
    html{
        height: 100%;
    }
    body{
        background-color: #0E1117;
        height: 100%;
    }
    button {
        border: none;
        background-color: grey;
        color: white
    }
    ul > li{
        list-style: none;
    }
    h3 {
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 0.7rem;
        line-height: 1.5;
        margin-bottom: 1rem;
    }
    code {
        font-family: Consolas, monospace !important;
        font-size: 0.7rem;
        line-height: 1.5;
        background-color: #f2f2f2;
        padding: 0.2rem 0.4rem;
    }


`;

export default GlobalStyles;
