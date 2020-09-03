import styled from "styled-components";

import { ButtonProps } from "./Button";

export const ButtonContainer = styled.button<ButtonProps>`
    position: relative;
    width: 180px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;

    background: ${ ({ variant }) => variant === "link" ? "#FFFFFF" : "var(--secondary-color)" };
    border: ${ ({ variant }) => variant === "link" ? "2px solid var(--secondary-color)" : "none" };
    color: ${ ({ variant }) => variant !== "link" ? "#FFFFFF" : "var(--secondary-color)" };
    
    font-size: 0.9rem;
    font-weight: 700;
    transition: 0.4s;
    margin: 1rem 0rem;

    box-shadow: ${ ({ variant }) => variant === "link" ? "1px 1px 3px 0px rgba(0,0,0,0.2)" : "1px 1px 13px 0px #00b2ff59" };

    > a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        color: var(--secondary-color);
        font-size: 0.9rem;
        font-weight: 700;
        transition: 0.4s;

    }

    &:hover{
        background: ${ ({ variant }) => variant === "button" && "#169fda" };
        box-shadow: ${ ({ variant }) => variant === "link" && "1px 1px 13px 0px #00b2ff59" };
    }
`;