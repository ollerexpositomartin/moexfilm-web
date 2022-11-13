import React,{useEffect} from "react";
import { useAuth } from "../../customHooks/useAuth";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import Wallpaper from "./Wallpaper";

function LoginPage() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    useEffect(()=>{
        if(isAuthenticated){
           navigate('/')
        }
    })

    return (
        <div className='flex flex-row absolute min-w-full h-full'>
           <Menu/>
           <Wallpaper/>
        </div>
        );
}
export default LoginPage;