import React from "react";
import { useHistory } from "react-router-dom";

import { Container, MainContent, UserList } from "./styles";
import logoImg from "../../assets/logo.png";

import User from "../../components/User";
import { useAuth } from "../../contexts/AuthenticationContext";

const Home: React.FC = () => {

    const history = useHistory();
    const { signOut, loggedUserData } = useAuth();

    function handleLogout(){
        signOut();
        history.push("/login");
    }

    return (
        <Container>
            <MainContent>
                <img src={logoImg} alt="UpPost" />
                <span>
                    Olá <span>{ loggedUserData?.user.username }</span>,<br/> Você está logado no UpPost, <br/> no entanto,a única coisa <br/> que você pode fazer é sair :).
                </span>
                <button onClick={handleLogout}>Sair</button>

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