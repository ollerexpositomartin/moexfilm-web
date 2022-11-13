import { createContext, useContext, useState } from "react";
import { API_URL } from "../config";


type Drawer = {
    index:number,
    setPositionIndex:(index:number)=>void
}

const DrawerContext = createContext<Drawer>({
    index:0,
    setPositionIndex:() => { }
})

export const useDrawer = () => {
    const drawer = useContext(DrawerContext)
    return drawer
}

export const DrawerProvider = ({ children }: any) => {

    const [index, setIndex] = useState(0);

    const setPositionIndex = (index:number) => {
        setIndex(index);
    }

    return (
        <DrawerContext.Provider value={{index,setPositionIndex}}>
            {children}
        </DrawerContext.Provider>
    )
}