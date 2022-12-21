import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const EventDetailsPage = () => {

    const { eventId } = useParams();

    const [event, setEvent] = useState(null);

    console.log(eventId);
    useEffect(() => {
        axios.get(`http://localhost:3001/user/see-event/${eventId}`)
        .then(axiosResponse => {
            console.log(axiosResponse.data);
            setEvent(axiosResponse.data)
        })
        .catch(err => console.log(err))
    }, [eventId]);

    return (
        <div>
            {event ? (
                <div>
                    <h1>{event.title}</h1>
                    <h2>{event.date}</h2>
                    <h3>{event.address.street}, {event.address.city}, {event.address.state} {event.address.zipcode}</h3>
                    <p>{event.description}</p>
                </div>
            ) : <p>loading...</p>}
        </div>
    );
}

export default EventDetailsPage;