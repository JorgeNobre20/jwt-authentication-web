import styled from "styled-components";

export const Container = styled.main`
    position: relative;
    display: flex;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;

    > form {
        width: 500px;
    }

    @media only screen and (max-width: 525px){
        > form {
            max-width: 90%;
            width: 90%;
            margin: 2rem 0;
        }
    }
`;