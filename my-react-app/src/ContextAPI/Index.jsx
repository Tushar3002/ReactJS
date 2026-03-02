import { createContext, useContext } from "react";

export const MyContext=createContext()

export const MyProvider=({children})=>{
    const myName="Tushar"
    const age=22
    return<MyContext.Provider value={{myName,age}}>
        {children}
    </MyContext.Provider>
}