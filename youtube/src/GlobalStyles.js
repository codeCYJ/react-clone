import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    *{
        font-family: 'Noto Sans', sans-serif;
        outline: none;
        list-style: none;
        text-decoration: none;
    };
    html,body{
        margin: 0;
        padding: 0;
        height: 100%;
    };
    a {
        color :inherit;
    };
    input, select, a, button, label {
        cursor: pointer;
        border: none;
    };
    table{
        border-spacing: 0px;
    }
`;

export default globalStyles;
