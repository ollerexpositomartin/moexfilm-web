
import { createContext, useContext, useState } from "react";


type IndexConf = {
    index:number,
    setPositionIndex:(index:number)=>void
}

const IndexContext = createContext<IndexConf>({
    index:0,
    setPositionIndex:() => { }
})

export const useIndex = () => {
    const index = useContext(IndexContext)
    return index
}

export const TranscoderProvider = ({ children }: any) => {

    const [index, setIndex] = useState(0);

   
}