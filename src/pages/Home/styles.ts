import styled from "styled-components";

export const Container = styled.main`
    position: absolute;
    display: flex;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 5rem 0rem;
`;

export const MainContent = styled.div`
    position: relative;
    flex-direction: column;
    padding: 10px;
    width: 350px;
    min-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border-radius: 3px;

    > img {
        height: 2.5rem;
        width: auto;
        margin: 2rem 0rem;
    }

    > span {
        font-weight: 400;
        color: var(--text-color);
        font-size: 1rem;
        line-height: 1.4rem;
        text-align: center;

        > span {
            font-weight: bold;
            color: var(--secondary-color);
        }
    }

    > button {
        position: relative;
        width: 200px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 4px;

        background: red;
        color: #FFFFFF;
        
        font-size: 1rem;
        font-weight: 700;
        transition: 0.4s;
        margin: 3rem 0rem 3rem 0;

        &:hover{
            box-shadow: 1px 1px 13px 0px #ff000078;
        }
    }

`;

export const UserList = styled.div`
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    > p {
        color: #888888;
        text-align: center;
        margin: 1rem 0;
    }
`;