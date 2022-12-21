import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../context/auth.context';

function IsAnon(props){
    const {isLoggedIn, isLoading} = useContext(AuthContext);

    if(isLoading) return <p>loading...</p>;

    if(isLoggedIn) return <Navigate to="/profile" />

    return props.children;
}

export default IsAnon;