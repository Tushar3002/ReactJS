import React, { createContext } from 'react'

const AppContext=createContext()

const AppProvider=({children})=>{
    const userData={
        name:"TJ",
        age:22
    }
    const myName="Tushar"
    // if single value to be passed then : value={userData}
    return <AppContext.Provider value={{userData,myName}}>   
        {children}
    </AppContext.Provider>
}

export {AppContext,AppProvider}