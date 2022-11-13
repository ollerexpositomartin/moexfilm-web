import React, { useEffect, useState } from "react";
import { useIndex } from "../customHooks/useIndex";
import {IconType,IconBase} from 'react-icons/lib'
import { GenIcon } from "react-icons";
import { BsFillHouseFill, BsFilm, BsTvFill } from "react-icons/bs";

type DrawerButtonConf = {
    icon:IconType,
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

function DrawerButton ({icon,name}:DrawerButtonConf){
    const {index,setPositionIndex} = useIndex()

    useEffect(()=>{
        ButtonCounter.counter = -1
    })
    ButtonCounter.counter++

    let buttonState = new ButtonState()
    buttonState.buttonPosition = ButtonCounter.counter
   
   
    return(
        <li>
        <a onClick={()=>{setPositionIndex(buttonState.buttonPosition)}} className={`${index==buttonState.buttonPosition?'text-primary border-r-4  rounded-sm':''} border-primary font-Roboto  rounded-sm`}>
            {React.createElement(icon, { width: 15, height: 15, color:`${index==buttonState.buttonPosition?'#6419E6':''}`})}
            {name}</a>
      </li>
    )
}

export default DrawerButton;