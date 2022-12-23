import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar(){
    const {user, isLoggedIn, logOutUser} = useContext(AuthContext);

    return(
        <div>
            {isLoggedIn && (
                <div className="welcomeUser">Hi, {user.name}!</div>
            )}

        <nav className="navbar">


            <Link to='/' style={{textDecoration: 'none'}}>
                <button className="buttonText">Home</button>
            </Link>

            {/* {!isLoggedIn && (
                <>
                <Link to='/signup'>
                    <button>Sign Up</button>
                </Link>
                <Link to='/login'>
                    <button>Log In</button>
                </Link>
                </>
            )} */}

            {isLoggedIn && (
                <>
                <Link to='/profile' style={{textDecoration: 'none'}}>
                    <button>Profile</button>
                </Link>
                <Link to='/my-events' style={{textDecoration: 'none'}}>
                    <button>My Saved Events</button>
                </Link>
                <Link to='/create-event' style={{textDecoration: 'none'}}>
                    <button>Create Event</button>
                </Link>
                <Link to='/see-events' style={{textDecoration: 'none'}}>
                    <button>See All Events</button>
                </Link>
                <Link to='/in-memoriam' style={{textDecoration: 'none'}}>
                    <button>In Memoriam</button>
                </Link>
                </>
            )}

<br />

        </nav>
    </div>
    )
}

export default Navbar;