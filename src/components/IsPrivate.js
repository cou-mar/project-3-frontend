import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../context/auth.context';

function IsPrivate(props){
    const {isLoggedIn, isLoading} = useContext(AuthContext);

    if(isLoading) return <p>loading...</p>;

    if(!isLoggedIn) return <Navigate to="/login" />

    return props.children;
}

export default IsPrivate;