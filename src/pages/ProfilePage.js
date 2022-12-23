import { Link } from "react-router-dom";
import pic4 from '../pic4.jpg';

const ProfilePage = () => {
    return (
        <div className="profileContainer">

            <div className="profileSlideshow">
                {/* slideshow: pics of your saved events */}
                <img src={pic4} alt="carousel4" style={{width:'600px', height:'300px', borderRadius:'10%'}} />
            </div>

            <div className="profileBttnContainer">
                <Link to='/my-events' style={{textDecoration: 'none'}}>
                    <button>My Saved Events</button>
                </Link>
                <Link to='/create-event' style={{textDecoration: 'none'}}>
                    <button>Create New Event</button>
                </Link>
                <Link to='/see-events' style={{textDecoration: 'none'}}>
                    <button>See All Events</button>
                </Link>
            </div>

        </div>
    );
}

export default ProfilePage;