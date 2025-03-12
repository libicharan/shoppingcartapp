import { createContext, useContext, useEffect } from "react";
import { useState } from "react"

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [jwtToken, setJwtToken] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    

    useEffect(() => {
        const token = localStorage.getItem('loggedUserKey');
        if(token) {
            setIsLoggedIn(true);
            setJwtToken(token);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('loggedUserKey', token);
        setIsLoggedIn(true);
        setJwtToken(token);
    }

    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        setJwtToken(null);
    }

    const selectCategory = (catName) => {
        setSelectedCategory(catName)

    }

    return (
        <AuthContext.Provider value={{isLoggedIn, jwtToken, login, logout,selectCategory,selectedCategory}}>
            {children}
        </AuthContext.Provider>
    )

};

export const useAuth = () => useContext(AuthContext);