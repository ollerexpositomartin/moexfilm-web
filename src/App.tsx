import React, { useState } from 'react';
import Logo from './resources/svg/Logo';
import Form from './components/Form';
import { useWindupString,} from "windups"



function App() {

  const [text] = useWindupString(
    "Que te apetece ver hoy 😈"
  );

  return (
    <div className='flex flex-row absolute min-w-full h-full'>
      <div className='bg-gray-800 w-2/5' >
        <Logo />
        <Form />
      </div>
      <div className='bg-img-login w-full'>
        <div className='w-full top-1/3 left-1/2 fixed text-center'>
          <p className='text-7xl text-gray-200 font-bebasNeu max-w-lg '>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
