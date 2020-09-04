import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthRoute from "./components/AuthRoute";
import AppRoute from "./components/AppRoute";
import AuthProvider from "./contexts/AuthenticationContext";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <AuthProvider>
                    <AppRoute exact path="/" component={Home} />
                    <AuthRoute path="/login" component={Login} />
                    <AuthRoute path="/register" component={Register} />
                </AuthProvider>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;