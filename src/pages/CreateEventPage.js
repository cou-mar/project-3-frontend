import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../context/auth.context";

const CreateEventPage = () => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState({
        street: "",
        city: "",
        state: "",
        zipcode: ""
    });
    const [location, setLocation] = useState({
        latitude: "",
        longitude: ""
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
            description,
            owner: user._id
        })
        .then(axiosResponse => {
            console.log(axiosResponse.data);
            navigate(`/see-event/${axiosResponse.data._id}`)
        })
        .catch(err => console.log(err))
    };

    return (
        <div className="createContainer">
            <h1>Create New Event</h1>

            <form 
            onSubmit={handleFormSubmit}
            >
                <label htmlFor="title">Title</label><br />
                <input placeholder="Race for the Cure" type="text" name="title" onChange={updateTitle} />
            <br />
                <label htmlFor="date">Date</label><br />
                <input placeholder="11/23/23" type="text" name="date" onChange={updateDate} />
            <br />
                <label htmlFor="street">Street</label><br />
                <input placeholder="123 Street" type="text" name="street" onChange={updateAddress} value={address.street}/>
            <br />
                <label htmlFor="city">City</label><br />
                <input placeholder="Miami" type="text" name="city" onChange={updateAddress} value={address.city} />
            <br />
                <label htmlFor="state">State</label><br />
                <input placeholder="FL" type="text" name="state" onChange={updateAddress} value={address.state} />
            <br />
                <label htmlFor="zipcode">Zipcode</label><br />
                <input placeholder="33132" type="text" name="zipcode" onChange={updateAddress} value={address.zipcode}/>
            <br />
                <label htmlFor="latitude">Latitude</label><br />
                <input placeholder="25.776201503384037" type="text" name="latitude" onChange={updateLocation} value={location.latitude} />
            <br />
                <label htmlFor="longitude">Longitude</label><br />
                <input placeholder="-80.18859153191926" type="text" name="longitude" onChange={updateLocation} value={location.longitude} />
            <br />
                <label htmlFor="description">Description</label><br />
                {/* <input placeholder="Half marathon to raise funds for breast cancer awareness." type="text" name="description" onChange={updateDescription} /> */}
                <textarea placeholder="Half marathon to raise funds for breast cancer awareness." name="description" id="description" onChange={updateDescription} cols="30" rows="5"></textarea>
            <br />
                <button>Create Event</button>
            </form>
            
        </div>
    );
}

export default CreateEventPage;