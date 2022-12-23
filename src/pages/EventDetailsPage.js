import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const EventDetailsPage = () => {

    const { eventId } = useParams();

    const navigate = useNavigate();

    const [event, setEvent] = useState(null);

    console.log(eventId);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/see-event/${eventId}`)
        .then(axiosResponse => {
            console.log(axiosResponse.data);
            setEvent(axiosResponse.data)
        })
        .catch(err => console.log(err))
    }, [eventId]);

    const addToFave = e => {
        e.preventDefault();
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/my-events/${eventId}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
            .then(axiosRes => {
                console.log(axiosRes.data)
                navigate('/my-events');
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {event ? (
                <div className="detailsContainer">
                    <h1>{event.title}</h1>
                    <h2>{event.date}</h2>
                    <h3>{event.address.street}, {event.address.city}, {event.address.state} {event.address.zipcode}</h3>
                    <p>{event.description}</p>
                    <Link to={`/see-event/${event._id}/edit`}>Update</Link>
                    <div>
                        <button onClick={addToFave}>Add to Favorites</button>
                    </div>
                </div>
            ) : <p>loading...</p>}
        </div>
    );
}

export default EventDetailsPage;