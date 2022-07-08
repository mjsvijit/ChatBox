import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [list,setList] = useState();

    const login = (product) => {
        setList(product);
      
    }

    
    return <AuthContext.Provider value={
        {
            isAuth,
           
            login,
           list
           
        }
    }>
        {children}
    </AuthContext.Provider>
}