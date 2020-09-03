import React from "react";

import { ButtonContainer } from "./styles";
import { ButtonProps } from "./Button";

const Button: React.FC<ButtonProps> = ({ label, variant, children , ...rest }) => {
    return (
        <ButtonContainer variant={variant} >
            { variant === "link" ? children : label }
        </ButtonContainer>
    );
}

export default Button;