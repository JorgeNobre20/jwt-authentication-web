import styled from "styled-components";

export const FormContainer = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    min-width: 400px;
    background: #FFFFFF;
    justify-content: center;
    border-radius: 3px;

    > img {
        height: 2.5rem;
        width: auto;
        margin-top: 2rem;
    }

    > p{
        font-size: 0.9rem;
        color: var(--text-color);
        font-weight: 400;
        margin: 0.5rem 0;
        margin-bottom: 2rem;
    }

    button:last-child{
        margin-bottom: 2rem;
    }
`;