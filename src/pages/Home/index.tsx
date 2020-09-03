import React from "react";

import { Container, MainContent, UserList } from "./styles";
import logoImg from "../../assets/logo.png";
import User from "../../components/User";

const Home: React.FC = () => {
    return (
        <Container>
            <MainContent>
                <img src={logoImg} alt="UpPost" />
                <span>
                    Olá <span>Jorge Nobre</span>,<br/> Você está logado no UpPost, <br/> no entanto,a única coisa <br/> que você pode fazer é sair :).
                </span>
                <button>Sair</button>

                <UserList>
                    <p>Pessoas que também estão cadastradas</p>
                    <User username="Jorge Nobre" />
                    <User username="Jorge Nobre" />
                    <User username="Jorge Nobre" />
                    <User username="Jorge Nobre" />
                    <User username="Jorge Nobre" />
                    <User username="Jorge Nobre" />
                    <User username="Jorge Nobre" />
                    <User username="Jorge Nobr dasdasdasdsdasdasde" />
                </UserList>
            </MainContent>
        </Container>
    );
}

export default Home;