import { useState } from "react";
import { BsFillHouseFill, BsFilm, BsPerson,BsMegaphoneFill,BsCompassFill } from "react-icons/bs";
import { GiPartyPopper } from "react-icons/gi";

import Logo from "../../assets/svg/Logo";
import DrawerButton from "../../components/DrawerButton";
import { DrawerProvider } from "../../customHooks/useDrawer";

function Drawer() {
  const [index,setIndex] = useState(0)

  return (
    <DrawerProvider>
    <div className="h-screen w-fit pt-5 pl-2 border-r-2 border-gray-700  pr-2">
      <Logo width={48}/>  
      <p className='font-bold font-Roboto mt-5'>MENU</p>
        <ul className="menu mt-2 mb-2 w-80 bg-base-100 text-base-content font-Roboto">
         <DrawerButton name="Home" icon={BsFillHouseFill} />
         <DrawerButton name="Community"icon={BsMegaphoneFill}/>
         <DrawerButton name="Comming soon"icon={BsCompassFill}/>
        </ul>
        <p className='font-bold font-Roboto'>SOCIAL</p>
        <ul className="menu mt-2 mb-2 w-80 bg-base-100 text-base-content font-Roboto">
         <DrawerButton name="Friends" icon={BsPerson} />
         <DrawerButton name="Watch Party"icon={GiPartyPopper}/>
        </ul>
        </div>
    </DrawerProvider>
  );
}

export default Drawer;
