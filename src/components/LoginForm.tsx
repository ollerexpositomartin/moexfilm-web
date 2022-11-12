import {FormEventHandler, useState} from "react";
import { API_URL } from "../config";

function LoginForm() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isAuth,setAuth] = useState(false);

    const loginUser = async () => {
        let user = JSON.stringify({email:email,password:password})
        console.log(user)
        let rq = await fetch(API_URL.concat('/auth/signIn'),{
            method:'POST',
//            mode:'no-cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            body: user
        })
        console.log(rq)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        loginUser();
    }

    return (
        <div className="h-96 relative top-24 ">
            <h1 className="text-gray-200 text-4xl font-semibold pb-5 font-Roboto m-5">Welcome back</h1>
            <form className="mt-5 m-5  mr-10" onSubmit={handleSubmit}>
                <label> 
                    <p className="text-gray-200 font-semibold font-Roboto">Username</p>
                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} className="input input-primary input-bordered w-full" />
                    </label>
                <label> 
                    <p className="mt-2 text-gray-200 font-semibold font-Roboto">Password</p>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="input input-primary input-bordered w-full " />
                </label>
                <button type="submit" className="btn btn-primary mt-5 w-full font-Roboto ">Login</button>
            </form>
            
        </div>
    );
}

export default LoginForm;