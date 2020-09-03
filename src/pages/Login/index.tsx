import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";


const Login: React.FC = () => {
    return (
        <Container>
            <Form title="Faça login para ter acesso ao UpPost">

                <Input placeholder="E-mail" /> 
                <Input placeholder="Senha" /> 

                <Button variant="button" label="Login" />
                <Button variant="link">
                    <Link to="/register">Cadastro</Link>
                </Button>

            </Form>
        </Container>
    );
}

export default Login;