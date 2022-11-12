import React from "react";
import Logo from '../assets/svg/Logo';
import LoginForm from '../components/LoginForm';
import { useWindupString } from "windups"

function LoginPage() {

    const [text] = useWindupString(
        "Que te apetece ver hoy 😈", {
        pace: (char) => (char === " " ? 80 : 40)
    }
    );

    return (
        <div className='flex flex-row absolute min-w-full h-full'>
            <div className='bg-gray-800 w-2/5' >
                <Logo />
                <LoginForm />
            </div>
            <div className='bg-img-login w-full'>
                <div className='w-full top-1/4 left-1/2 fixed text-center'>
                    <p className='text-9xl text-gray-200 font-bebasNeu max-w-lg '>{text}</p>
                </div>
            </div>
        </div>
        );
}
export default LoginPage;