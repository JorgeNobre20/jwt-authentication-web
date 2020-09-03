import React from "react";

import { FormContainer } from "./styles";
import { FormProps } from "./Form";

import logoImg from "../../assets/logo.png";

const Form: React.FC<FormProps> = ({ title, children, ...rest }) => {
    return (
        <FormContainer {...rest}>
            <img src={logoImg} alt="Logo"/>
            <p>{title}</p>
            {children}
        </FormContainer>    
    );
}

export default Form;