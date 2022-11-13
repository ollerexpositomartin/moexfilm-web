import { createContext, useContext, useState } from "react";
import { API_URL } from "../config";


type Auth = {
    isAuthenticated: Boolean,
    login: (email: string, password: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<Auth>({
    isAuthenticated: false,
    login: async () => { },
    logout: () => {}
})

export const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
}

export const AuthProvider = ({ children }: any) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (email: string, password: string) => {
        await fetch(API_URL.concat('/auth/signIn'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password })
        }).then((rs) => {
            console.log(rs)
            if (rs.status == 200) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        })
    }

    const logout = () =>{
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login,logout }}>
            {children}
        </AuthContext.Provider>
    )
}