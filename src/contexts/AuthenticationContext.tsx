import React, { useContext, createContext, useState, useEffect } from "react";

export type IUser = {
    id: number;
    username: string;
}

export type LoggedUserData = {
    user: IUser;
    token: string;
};


interface IAuthContextData{
    loggedUserData: LoggedUserData | null;
    signed: boolean;
    signOut: () => void;
    signIn: () => void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {

    const [loggedUserData,setLoggedUserData] = useState<LoggedUserData | null>(null);

    useEffect(() => {
        
        const storagedData = localStorage.getItem("ud");

        if(storagedData){
            const parsedData = JSON.parse(storagedData);
            setLoggedUserData({ token: parsedData.tk, user: { username: parsedData.un , id: parsedData.ui } });
        }

    }, []);

    function signOut(){
        setLoggedUserData(null);
        localStorage.clear();
    };

    function signIn(){

        const storagedData = localStorage.getItem("ud");

        if(storagedData){
            const parsedData = JSON.parse(storagedData);
            setLoggedUserData({ token: parsedData.tk, user: { username: parsedData.un , id: parsedData.ui } });
        }

    };


    return (
        <AuthContext.Provider value={{ signed: !!loggedUserData , loggedUserData,signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = (): IAuthContextData => {
    const context = useContext(AuthContext);
    return context;
}

export default AuthProvider;