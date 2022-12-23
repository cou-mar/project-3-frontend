import { useState, useEffect, createContext } from "react";
import axios from "axios";

const API_URL= process.env.REACT_APP_BACKEND_URL
const AuthContext = createContext();

function AuthProviderWrapper(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const storeToken = (token) => {
        localStorage.setItem('authToken', token);
    }

    const authenticateUser = () => {
        const storedToken = localStorage.getItem('authToken');

        // console.log("This is the token:", storedToken)

        if(storedToken){
            // console.log("Made it to line 20")
            axios.get(`${API_URL}/auth/verify`, {headers: {Authorization: `Bearer ${storedToken}`}}
            )
            .then((response) => {
                // console.log("Made it to line 24")
                const user = response.data;
                setIsLoggedIn(true);
                setIsLoading(false);
                setUser(user);
            })
            .catch((error) => {
                setIsLoggedIn(false);
                setIsLoading(false);
                setUser(null);
            });
        } else {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);
        }
    };

    const removeToken = () => {
        localStorage.removeItem('authToken');
    };

    const logOutUser = () => {
        removeToken();
        authenticateUser();
    };

    useEffect(() => {
        authenticateUser();
    }, []);

    return(
        <AuthContext.Provider value={{
            isLoggedIn,
            isLoading,
            user,
            storeToken,
            authenticateUser,
            logOutUser
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext,
    AuthProviderWrapper
};