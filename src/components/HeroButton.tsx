import React, { useEffect } from "react";
import { useIndex } from "../customHooks/useIndex";

type ButtonConf = {
    name:string
}

let ButtonCounter =  {
    counter: -1
}

class ButtonState {
    buttonPosition:number
    constructor(){
        this.buttonPosition = 0
    }
}

function HeroButton ({name}:ButtonConf){
    const {index,setPositionIndex} = useIndex()

    useEffect(()=>{
        ButtonCounter.counter = -1
    })
    ButtonCounter.counter++

    let buttonState = new ButtonState()
    buttonState.buttonPosition = ButtonCounter.counter
   
   
    return(
        <li>
        <a onClick={()=>{setPositionIndex(buttonState.buttonPosition)}} className={`${index==buttonState.buttonPosition?'text-white':''} font-Roboto hover:bg-transparent`}>{name}</a>
      </li>
    )
}

export default HeroButton;