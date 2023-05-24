import React, { useContext, useState } from "react";
import { supabase } from "../lib/supabase";
export const authContext = React.createContext();
export const useAuth = () => useContext(authContext); //custom hook

const AuthContextProvider = ({ children }) => {

    const [session, setSession] = useState(null);
    const [userInSys, setUserInSys] = useState(null);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const isUserLoggedIn = () => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    };

    const getLoggedUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        setUserInSys(user)
    }

    const logout = async () => {
        const { error } = await supabase.auth.signOut()
    };

    const values = {
        session,
        error,
        loading,
        userInSys,

        getLoggedUser,
        isUserLoggedIn,
        logout,
        setError,
    };
    return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;