import React, { forwardRef } from "react";

import { InputProps } from "./Input";
import { InputContainer } from "./styles";

const Input: React.RefForwardingComponent<HTMLInputElement,InputProps> = ({ ...rest }, ref) => {

    return (
        <InputContainer ref={ref} {...rest} />
    );

}

export default forwardRef(Input);