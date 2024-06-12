"use client";
import React,{createContext,useState, useContext} from "react";
import themes from "./themes";

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()

export const GlobalProvider = ({children}) => {
    const[selectedTheme,setSelectedTheme]=useState(1);
    const theme = themes[selectedTheme]

    return (
        <GlobalContext.Provider 
        value={{
            theme,
        }}>
            <GlobalUpdateContext value={setGlobalState}>
             {children}
            </GlobalUpdateContext>
        </GlobalContext.Provider>
    )
}
