import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    *{
        outline: none;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    };
    input, select, a, button, label {
        cursor: pointer;
    };
`;

export default globalStyles;
