import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #FF9900;
        --secondary-color: #00B2FF;
        --sign-button-background: #F92F2F;
        --text-color: #787878;
        --placeholder-text-color: #ADADAD;
        --input-background-color: #f1f1f10f;
        --input-border-color: #F4F4F4;
    }

    *{
        padding: 0px;
        margin: 0px;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    body {
        width: 100%;
        background: var(--primary-color);
    }

    input, button, a{
        text-decoration: none;
        outline: none;
        border: none;
        background: none;
    }
`;

export default GlobalStyles;