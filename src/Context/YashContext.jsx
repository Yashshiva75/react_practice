import { createContext,useState } from "react";

export const yashContext = createContext()

const YashProvider = ({children})=>{
    function doubler(num){
        return num * 2
    }

    return(
        <yashContext.Provider value={doubler}>
             {children}
        </yashContext.Provider>
    )

}

export default YashProvider;