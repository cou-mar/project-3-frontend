import axios from "axios";
import { useState } from "react";

const UpdateEvent = (props) => {
    const [update, setUpdate] = useState({
        title: props.event.title,
        date: props.event.date,
        street: props.event.address.street,
        city: props.event.address.city,
        state: props.event.address.state,
        zipcode: props.event.address.zipcode,
        latitude: props.event.location.latitude,
        longitude: props.event.location.longitude,
        description: props.event.description
    });

    const updateState = e => setUpdate({
        ...update,
        [e.target.name]: e.target.value
    });

    const submitFormHandler = e => {
        e.preventDefault();
        console.log('form submit works');
        axios.put(`http://localhost:3001/user/see-event/${props.eventId}/edit`, {
            title: update.title,
            date: update.date,
            street: update.street,
            city: update.city,
            state: update.state,
            zipcode: update.zipcode,
            latitude: update.latitude,
            longitude: update.longitude,
            description: update.description
        })
        .then(axiosResponse => {
            console.log(axiosResponse.data);
            props.setEvent(axiosResponse.data)
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Update Event</h1>

            <form onSubmit={submitFormHandler}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange={setUpdate} value={update.title} />

                <label htmlFor="date">Date</label>
                <input type="text" name="date" onChange={setUpdate}value={update.date} />

                <label htmlFor="street">Street</label>
                <input type="text" name="street" onChange={setUpdate} value={update.street} />

                <label htmlFor="city">City</label>
                <input type="text" name="city" onChange={setUpdate} value={update.city} />

                <label htmlFor="state">State</label>
                <input type="text" name="state" onChange={setUpdate} value={update.state} />

                <label htmlFor="zipcode">Zipcode</label>
                <input type="text" name="zipcode" onChange={setUpdate} value={update.zipcode} />

                <label htmlFor="latitude">Latitude</label>
                <input type="text" name="latitude" onChange={setUpdate} value={update.latitude} />

                <label htmlFor="longitude">Longitude</label>
                <input type="text" name="longitude" onChange={setUpdate} value={update.longitude} />

                <button>Submit</button>
            </form>
        </div>
    );
};

export default UpdateEvent;