import { useEffect, useState } from 'react'
import {BsSearch} from 'react-icons/bs'

function InputSearch(){
   useEffect(()=>{
    document.getElementById('inputSearch')!.addEventListener('focus',(event) => {
        setFocus(true)
        
    })

    document.getElementById('inputSearch')!.addEventListener('focusout',(event) => {
        setFocus(false)
    })
   })

    const [focus,setFocus] = useState(false)
    return(
        <div className={`ml-3 mr-3 flex flex-row border-2  rounded-lg pl-2 pr-0 w-fit ${focus?'border-primary':'border-gray-700'}`}>
        <BsSearch className='mt-4'/>
        <input
          type="text"
          id="inputSearch"
          className="input border-0 focus:outline-none"
          placeholder="Search"
        />
        </div>
    )
    
}

export default InputSearch