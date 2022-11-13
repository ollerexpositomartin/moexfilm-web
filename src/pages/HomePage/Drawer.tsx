import { useState } from "react";
import { BsFillHouseFill,BsFillGearFill, BsPerson,BsMegaphoneFill,BsCompassFill,BsDoorClosed } from "react-icons/bs";
import { GiPartyPopper } from "react-icons/gi";

import Logo from "../../assets/svg/Logo";
import DrawerButton from "../../components/DrawerButton";
import DrawerMenu from "../../components/DrawerMenu";
import { IndexProvider } from "../../customHooks/useIndex";

function Drawer() {

  return (
    <IndexProvider>
    <div className="h-screen w-fit pt-5 pl-2  shadow-md  pr-2">
      <Logo width={48}/>  
        <DrawerMenu name={"MENU"}>
        <DrawerButton name="Home" icon={BsFillHouseFill} />
        <DrawerButton name="Community"icon={BsMegaphoneFill}/>
        <DrawerButton name="Comming soon"icon={BsCompassFill}/>
        </DrawerMenu>
        <DrawerMenu name="SOCIAL">
         <DrawerButton name="Friends" icon={BsPerson} />
         <DrawerButton name="Watch Party"icon={GiPartyPopper}/>
        </DrawerMenu>
        <DrawerMenu name="GENERAL">
         <DrawerButton name="Settings" icon={BsFillGearFill} />
         <DrawerButton name="Log Out"icon={BsDoorClosed}/>
        </DrawerMenu>
        </div>
    </IndexProvider>
  );
}

export default Drawer;
