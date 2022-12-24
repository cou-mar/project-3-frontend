import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../context/auth.context';

const UpdateEventPage = () => {

    const navigate = useNavigate();

    const {authenticateUser} = useContext(AuthContext);

    const { eventId } = useParams();

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

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/see-event/${eventId}`)
            .then(axiosResponse => {
                console.log(axiosResponse.data);
                setTitle(axiosResponse.data.title);
                setDate(axiosResponse.data.date);
                setAddress(axiosResponse.data.address);
                setLocation(axiosResponse.data.location);
                setDescription(axiosResponse.data.description);
            })
            .catch(err => console.log(err));
    }, [eventId]);

    const handleFormSubmit = e => {
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/user/see-event/${eventId}/edit`, {
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

    const deleteFunction = (singleEvent) => {
        if(window.confirm('Are you sure you want to delete this event?') === true){ 
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/user/see-event/${eventId}/delete`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        }
        )
            .then(axiosResponse => {
                navigate('/profile');
            })
            .catch(err => console.log(err));
        } else {
            return
        }
    };

    return (
        <div className="updateContainer">
            <h1>Update Event</h1>

            <form 
            onSubmit={handleFormSubmit}
            >
                <label htmlFor="title">Title</label><br />
                <input placeholder="Race for the Cure" type="text" name="title" value={title} onChange={updateTitle} />
            <br />
                <label htmlFor="date">Date</label><br />
                <input placeholder="11/23/23" type="text" name="date" value={date} onChange={updateDate} />
            <br />
                <label htmlFor="street">Street</label><br />
                <input placeholder="1123 Street" type="text" name="street" onChange={updateAddress} value={address.street}/>
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
                <textarea placeholder="Half marathon to raise funds for breast cancer awareness." name="description" id="description" onChange={updateDescription} value={description} cols="30" rows="5"></textarea>
            <br />
                <button className="authBttn">Update Event</button>
                <Link style={{textDecoration: 'none'}}>
                    <button className="authBttn" onClick={deleteFunction}>Delete Event</button>
                </Link>
            </form>
            
        </div>
    );
}

export default UpdateEventPage;