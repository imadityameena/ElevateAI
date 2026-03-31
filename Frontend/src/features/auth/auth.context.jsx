import { createContext, useEffect, useState } from "react";
import { getMe } from "./services/auth.api";

let initialUserPromise = null;

function loadInitialUser() {
    if (!initialUserPromise) {
        initialUserPromise = getMe().then((data) => data?.user ?? null);
    }

    return initialUserPromise;
}

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAndSetUser = async () => {
            try {
                const initialUser = await loadInitialUser()
                setUser(initialUser)
            } finally {
                setLoading(false)
            }
        }

        getAndSetUser()
    }, [])


    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}} >
            {children}
        </AuthContext.Provider>
    )

    
}