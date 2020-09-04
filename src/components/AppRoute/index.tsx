import React from "react";
import { RouteProps, Redirect, Route } from "react-router-dom";
import { useAuth } from "../../contexts/AuthenticationContext";

const AppRoute: React.FC<RouteProps> = (props) => {
    
    const { signed } = useAuth();

    return signed ? <Route {...props} /> : <Redirect to={{ pathname: "/login" }} /> 

}

export default AppRoute;