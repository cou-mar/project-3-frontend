import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar(){
    const {user, isLoggedIn, logOutUser} = useContext(AuthContext);

    return(
        
        <nav>

            <Link to='/'>
                <button>Home</button>
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
                <Link to='/profile'>
                    <button>Profile</button>
                </Link>
                <Link to='/my-events'>
                    <button>My Saved Events</button>
                </Link>
                <Link to='/create-event'>
                    <button>Create Event</button>
                </Link>
                <Link to='/see-events'>
                    <button>See All Events</button>
                </Link>
                <Link to='/in-memoriam'>
                    <button>In Memoriam</button>
                </Link>
                </>
            )}

<br />
            {isLoggedIn && (
                <span>Welcome, {user.name}!</span>
            )}
        </nav>
    )
}

export default Navbar;