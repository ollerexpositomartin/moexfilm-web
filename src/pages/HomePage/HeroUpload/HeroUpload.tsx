import React, {useEffect,useState} from 'react'
import { transcode } from '../../../services/Transcode';

function HeroUpload(){

    const [file,setFile] = useState();

    useEffect(()=>{
       document.getElementById('upload')?.addEventListener('change',(e)=>{
        let upload:HTMLInputElement = e.target as (HTMLInputElement)
        if(upload.files?.length != null && upload.files?.length > 0 ){
            transcode(upload.files[0])
        }
       })
    })

    return(
        <div className="w-full h-screen relative overflow-hidde">
            <div><input id="upload" type="file" onClick={()=>{}} className='w-full h-screen opacity-0'/></div>
        </div>
    )
}

export default HeroUpload