import React, { useEffect } from "react";
import { useAuth } from "../../customHooks/useAuth";
import { IndexProvider, useIndex } from "../../customHooks/useIndex";
import Wallpaper from "../LoginPage/Wallpaper";
import Drawer from "./Drawer";
import HeroHome from "./HeroHome/HeroHome";
import HeroUpload from "./HeroUpload/HeroUpload";
import Profile from "./Profile";

function HomePage() {
  const {index} = useIndex();
  const {logout} = useAuth();

  useEffect(()=>{
    switch(index){
      case 9:logout()
    }
  })

  const selectHero = (index:number) => {
    switch(index){
      case 0: return <HeroHome/>
      case 5: return <HeroUpload/>
    }
    return <></>
  }
  
  return (
    <div className=" flex w-full  absolute flex-row ">  
      <Drawer />
      {selectHero(index)}
      <Profile/>
    </div>
  );
}

export default HomePage;
