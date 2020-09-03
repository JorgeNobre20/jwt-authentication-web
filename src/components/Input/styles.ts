import styled from "styled-components";

export const InputContainer = styled.input`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 80%;
    max-width: 300px;
    background: var(--input-background-color);
    border: 2px solid var(--input-border-color);
    border-radius: 10px;
    padding: 0px 10px;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    transition: 0.4s;


    ::placeholder{
        color: var(--placeholder-text-color);
        font-weight: 400;
        font-size: 0.9rem;
    }

    &:focus,
    &:valid{
        border-color: var(--secondary-color);
    }
`;