import React, { useRef, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";

import { Container } from "./styles";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import api from "../../services/api";

import { LoginResponse } from "./Login";

const Login: React.FC = () => {

    const history = useHistory();

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        const { current: email } = emailInputRef;
        const { current: password } = passwordInputRef;

        if(email && password){

            try{
            
                const response = await api.post("/login", { email: email.value , password: password.value });
                const data = response.data as LoginResponse;

                const ud = JSON.stringify({ 
                    ui: data.user.id, 
                    un: data.user.username,
                    tk: data.token
                });

                localStorage.setItem("ud",ud);
                history.push("/");

            }catch(err){
                
                const error = err.response.data;
                alert(error.message);
                
            }   

        }

    }   

    return (
        <Container>
            <Form onSubmit={handleSubmit} title="Faça login para ter acesso ao UpPost">

                <Input 
                    placeholder="E-mail" 
                    type="email"
                    name="email"
                    required 
                    ref={emailInputRef}
                /> 
                <Input 
                    placeholder="Senha" 
                    type="password" 
                    name="password"
                    required 
                    ref={passwordInputRef}
                /> 

                <Button variant="button" label="Login" />
                <Button variant="link">
                    <Link to="/register">Cadastro</Link>
                </Button>

            </Form>
        </Container>
    );
}

export default Login;