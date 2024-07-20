import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
import toast from 'react-hot-toast';


function AuthContextProvider({ children }) {
    const [logedInUser, setLogedInUser] = useState();

    let logOut = () => {
        setLogedInUser();
        toast.error("user logged off ")
    }

    let logIn = (username, password) => {
        if (username == "admin" && password == "admin") {
            setLogedInUser(username);
        }
    }
    return (
        <AuthContext.Provider
            value={{ logIn, logedInUser, setLogedInUser, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider