import React from "react";

import { UserContainer, UserImage, Username } from "./styles";
import { UserProps } from "./User";

const User: React.FC<UserProps> = ({ username }) => {
    return (
        <UserContainer>
            <UserImage />
            <Username>{username}</Username>
        </UserContainer>
    );
}

export default User;