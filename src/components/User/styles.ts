import styled from "styled-components";

export const UserContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 1rem;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    background: var(--primary-color);
    padding: 10px;
`;

export const UserImage = styled.div`
    height: 2rem;
    width: 2rem;
    background: #FFFFFF;
    border-radius: 1rem;
    flex-shrink: 0;
    margin-right: 0.5rem;
`;

export const Username = styled.h1`
    color: #FFFFFF;
    font-weight: bold;
    width: 200px;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
`;