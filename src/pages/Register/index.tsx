import React, { useRef, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";

import { Container } from "./styles";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import api from "../../services/api";

import { LoginResponse } from "../Login/Login";
import { useAuth } from "../../contexts/AuthenticationContext";

const Register: React.FC = () => {

    const history = useHistory();
    const { signIn } = useAuth();

    const nameInputRef = useRef<HTMLInputElement>(null);
    const lastNameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    async function handleSubmit(event: FormEvent){

        event.preventDefault();

        const { current: name } = nameInputRef;
        const { current: lastName } = lastNameInputRef;
        const { current: email } = emailInputRef;
        const { current: password } = passwordInputRef;
        
        if(name && lastName && email && password){

            try{
            
                await api.post("/users", { 
                    email: email.value, 
                    username: name.value +" "+ lastName.value , 
                    password: password.value 
                });

                const response = await api.post("/login", { email: email.value , password: password.value });
                const data = response.data as LoginResponse;

                const ud = JSON.stringify({ 
                    ui: data.user.id, 
                    un: data.user.username,
                    tk: data.token
                });

                localStorage.setItem("ud",ud);
                signIn();
                history.push("/");

            }catch(err){
                
                const error = err.response;
                if(error){
                    alert(error.data.message);
                }
                
            }

        }

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} title="Cadastre-se no UpPost">

                <Input 
                    placeholder="Nome" 
                    type="text"
                    ref={nameInputRef} 
                    required 
                /> 
                <Input 
                    placeholder="Sobrenome" 
                    type="text" 
                    ref={lastNameInputRef} 
                    required 
                /> 
                <Input 
                    placeholder="E-mail" 
                    type="email" 
                    ref={emailInputRef} 
                    required 
                /> 
                <Input 
                    placeholder="Senha" 
                    type="password" 
                    ref={passwordInputRef} 
                    required 
                /> 

                <Button variant="button" label="Cadastrar" />
                <Button variant="link">
                    <Link to="/login">Login</Link>
                </Button>

            </Form>
        </Container>
    );
}

export default Register;