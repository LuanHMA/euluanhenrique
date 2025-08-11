"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface ContactContextProps {
    isShowingContact: boolean
    handleShowContact: () => void
}

export const ContactContext = createContext({} as ContactContextProps)

export function ContactViewProvider({ children }: { children: ReactNode }){
    const [isShowingContact, setIsShowingContact] = useState(false)

    function handleShowContact(){
        setIsShowingContact(!isShowingContact)
    }

    return <ContactContext.Provider value={{ isShowingContact, handleShowContact }}>
        {children}
    </ContactContext.Provider>
}

export function useContactView(){
    if(!ContactContext){
        throw new Error('useContactView must be used within a ContactViewProvider')
    }

    return useContext(ContactContext)
}