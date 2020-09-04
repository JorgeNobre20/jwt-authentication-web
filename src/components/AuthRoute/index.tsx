import React from "react";
import { RouteProps, Redirect, Route } from "react-router-dom";
import { useAuth } from "../../contexts/AuthenticationContext";

const AuthRoute: React.FC<RouteProps> = (props) => {
    
    const { signed } = useAuth();

    return signed ? <Redirect to={{ pathname: "/" }} /> : <Route {...props} />

}

export default AuthRoute;