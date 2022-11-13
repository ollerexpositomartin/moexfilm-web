import { useState } from "react";
import { BsFillHouseFill, BsFilm, BsTvFill } from "react-icons/bs";
import DrawerButton from "../../components/DrawerButton";
import { DrawerProvider } from "../../customHooks/useDrawer";

function Drawer() {
  const [index,setIndex] = useState(0)

  return (
    <DrawerProvider>
    <div className="h-full w-fit mt-5 pl-2">
      <p className='font-bold font-Roboto'>MENU</p>
        <ul className="menu mt-2 mb-2 w-80 bg-base-100 text-base-content font-Roboto">
         <DrawerButton name="Home" icon={BsFillHouseFill} />
         <DrawerButton name="Movie"icon={BsFilm}/>
         <DrawerButton name="Tv Shows"icon={BsTvFill}/>
        </ul>
        <p className='font-bold font-Roboto'>FRIENDS</p>
    </div>
    </DrawerProvider>
  );
}

export default Drawer;
