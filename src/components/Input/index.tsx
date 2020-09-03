import React from "react";

import { InputProps } from "./Input";
import { InputContainer } from "./styles";

const Input: React.FC<InputProps> = ({ ...props }) => {
    return (
        <InputContainer {...props} />
    );
}

export default Input;