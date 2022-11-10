import React, { useState } from 'react';
import Logo from './resources/svg/Logo';
import Form from './components/Form';
import { useWindupString,} from "windups"



function App() {

  const [text] = useWindupString(
    "Que te apetece ver hoy 😈"
  );

  return (
    <div className='flex flex-row absolute h-full w-screen '>
      <div className='bg-gray-800 w-2/5' >
        <Logo />
        <Form />
      </div>
      <div className='bg-img-login w-full '>
        <div className='relative top-1/4 left-1/3 max-w-lg'>
          <p className='text-9xl text-gray-200 font-bebasNeu '>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
