import React, { useContext, createContext, useState, useEffect } from "react";

interface IUser{
    id: number; 
    username: string;
}

interface IAuthContextData{
    user: IUser | null;
    signed: boolean;
    signOut: () => void;
    signIn: () => void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {

    const [user,setUser] = useState<IUser | null>(null);

    function signOut(){};
    function signIn(){};

    useEffect(() => {

    }, []);

    return (
        <AuthContext.Provider value={{ signed: !!user , user: { username: "", id: 5 }, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = (): IAuthContextData => {
    const context = useContext(AuthContext);
    return context;
}

export default AuthProvider;