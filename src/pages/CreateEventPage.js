import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateEventPage = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState({
        street: "",
        city: "",
        state: "",
        zipcode: 0
    });
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0
    });
    const [description, setDescription] = useState('');

    const updateTitle = (e) => setTitle(e.target.value);

    const updateDate = (e) => setDate(e.target.value);

    const updateAddress = (e) => {
        setAddress({...address, [e.target.name]: e.target.value})};

    const updateLocation = (e) => {
        setLocation({...location, [e.target.name]: e.target.value})};

    const updateDescription = (e) => setDescription(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:3001/user/create-event', {
            title,
            date,
            address,
            location,
            description
        })
        .then(axiosResponse => {
            console.log(axiosResponse.data);
            navigate(`/see-event/${axiosResponse.data._id}`)
        })
        .catch(err => console.log(err))
    };

    return (
        <div>
            <h1>Create New Event</h1>

            <form 
            onSubmit={handleFormSubmit}
            >
                <label htmlFor="title">Title</label>
                <input placeholder="Race for the Cure" type="text" name="title" onChange={updateTitle} />

                <label htmlFor="date">Date</label>
                <input placeholder="11/23/23" type="text" name="date" onChange={updateDate} />

                <label htmlFor="street">Street</label>
                <input placeholder="123 Street" type="text" name="street" onChange={updateAddress} value={address.street}/>

                <label htmlFor="city">City</label>
                <input placeholder="Miami" type="text" name="city" onChange={updateAddress} value={address.city} />

                <label htmlFor="state">State</label>
                <input placeholder="FL" type="text" name="state" onChange={updateAddress} value={address.state} />

                <label htmlFor="zipcode">Zipcode</label>
                <input placeholder="33132" type="text" name="zipcode" onChange={updateAddress} value={address.zipcode}/>

                <label htmlFor="latitude">Latitude</label>
                <input placeholder="25.776201503384037" type="text" name="latitude" onChange={updateLocation} value={location.latitude} />

                <label htmlFor="longitude">Longitude</label>
                <input placeholder="-80.18859153191926" type="text" name="longitude" onChange={updateLocation} value={location.longitude} />

                <label htmlFor="description">Description</label>
                {/* <input placeholder="Half marathon to raise funds for breast cancer awareness." type="text" name="description" onChange={updateDescription} /> */}
                <textarea placeholder="Half marathon to raise funds for breast cancer awareness." name="description" id="description" onChange={updateDescription} cols="30" rows="5"></textarea>

                <button>Create Event</button>
            </form>
            
        </div>
    );
}

export default CreateEventPage;