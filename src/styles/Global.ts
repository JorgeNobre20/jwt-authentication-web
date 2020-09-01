import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #FF9900;
        --secondary-color: #00B2FF;
        --sign-button-background: #F92F2F;
        --text-color: #787878;
        --placeholder-text-color: #ADADAD;
        --input-background-color: #F4F4F4;
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
`;

export default GlobalStyles;