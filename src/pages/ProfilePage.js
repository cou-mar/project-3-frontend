import { Link } from "react-router-dom";

const ProfilePage = () => {
    return (
        <div className="profileContainer">

            <div className="profileSlideshow">
                slideshow: pics of your saved events
            </div>

            <div className="profileBttnContainer">
                <Link to='/my-events'>
                    <button>My Saved Events</button>
                </Link>
                <Link to='/create-event'>
                    <button>Create New Event</button>
                </Link>
                <Link to='/see-events'>
                    <button>See All Events</button>
                </Link>
            </div>

        </div>
    );
}

export default ProfilePage;