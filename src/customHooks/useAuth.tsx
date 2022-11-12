import { rmSync } from "fs";
import { createContext,useContext,useState } from "react";
import { API_URL } from "../config";
import { useNavigate } from 'react-router-dom'


type Auth = {
    isAuthenticated:Boolean,
    login:(email:string,password:string) => Promise<void>
}

const AuthContext = createContext<Auth>({
    isAuthenticated:false,
    login:async () => {}
})

export const useAuth = () =>{
    const auth = useContext(AuthContext)
    return auth
}

export const AuthProvider = ({children}:any) =>{

    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const login = async (email:string,password:string) => {
        await fetch(API_URL.concat('/auth/signIn'),{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
         body: JSON.stringify({email:email,password:password})
        }).then((rs)=>{
            console.log(rs)
            if(rs.status == 200){
                setIsAuthenticated(true);
                navigate('/')
            }else{
                setIsAuthenticated(false);
            }
        })

        
    }
    
    return(
        <AuthContext.Provider value={{isAuthenticated,login}}>
            {children}
        </AuthContext.Provider>
    )
}