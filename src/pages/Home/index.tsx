import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, MainContent, UserList } from "./styles";
import logoImg from "../../assets/logo.png";

import User from "../../components/User";
import { useAuth } from "../../contexts/AuthenticationContext";
import api from "../../services/api";

interface IUser{
    id: number;
    username: string;
    email: string;
    password: string;
}

const Home: React.FC = () => {

    const history = useHistory();
    const { signOut, loggedUserData } = useAuth();

    const [users,setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        
        (async () => {
            const token = loggedUserData?.token;
            const response = await api.get("/users", { headers: { Authorization: `Bearer ${token}` } } );
            setUsers(response.data);
        })();

    }, [loggedUserData]);

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
                    {
                        users.map( (user) => (
                                user.id !== loggedUserData?.user.id && <User key={user.id} username={user.username} />
                            )
                        )
                    }
                </UserList>
            </MainContent>
        </Container>
    );
}

export default Home;