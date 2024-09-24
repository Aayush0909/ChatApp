import React, { createContext, useState } from 'react'
import Cookies  from "js-cookie";
import { useContext } from 'react';

export const AuthContext = createContext(); // use for access globally , the localstorage info

export const AuthProvider =  ({children}) => {

    const initialUserState = Cookies.get("jwt") || localStorage.getItem("messenger");
    const [authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined
      );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
    {children}
  </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);
