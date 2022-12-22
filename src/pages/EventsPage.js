import { useState, useEffect } from "react";
import axios from "axios";

const EventsPage = () => {

    const [events, setEvents] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/user/see-events')
            .then(axiosResponse => {
                console.log(axiosResponse.data);
                setEvents(axiosResponse.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h1>All Events + Map</h1>
            {events && events.foundEventsArray.map((singleEvent) => {
                return (
                    <div>
                        <h1>{singleEvent.title}</h1>
                        <h2>{singleEvent.date}</h2>
                        <h3>{singleEvent.address.street}, {singleEvent.address.city}, {singleEvent.address.state} {singleEvent.address.zipcode}</h3>
                        <p>{singleEvent.description}</p>
                    </div>
                )
            })}
            {events && events.komenArray.data.events.results.map((singleEvent) => {
                return (
                    <div>
                        <h1>{singleEvent.name}</h1>
                        <h2>{singleEvent.startDate}</h2>
                        <h3>{singleEvent.city}, {singleEvent.zipcode}</h3>
                        <p>{singleEvent.locationDescription}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default EventsPage;