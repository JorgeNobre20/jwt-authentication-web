import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";

const Register: React.FC = () => {
    return (
        <Container>
            <Form title="Cadastre-se no UpPost">

                <Input placeholder="Nome" type="text" required /> 
                <Input placeholder="Sobrenome" type="text" required /> 
                <Input placeholder="E-mail" type="email" required /> 
                <Input placeholder="Senha" type="password" required /> 

                <Button variant="button" label="Cadastrar" />
                <Button variant="link">
                    <Link to="/login">Login</Link>
                </Button>

            </Form>
        </Container>
    );
}

export default Register;