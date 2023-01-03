import axios from "axios";
import { useEffect, useState } from "react";

const FavoritesPage = () => {
    
    const [faves, setFaves] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/my-events`, {
            headers:    {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
            .then(axiosResponse => {
                console.log(axiosResponse.data)
                setFaves(axiosResponse.data)
            })
            .catch(err => console.log(err))
    }, []);

    const deleteFave = (id) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/favorite/${id}/delete`)
        .then((deleted) => {
            let newFavesArray = faves.filter((fave) => fave._id !== deleted.data._id)
            setFaves(newFavesArray)
            console.log("We deleted this favorite:", deleted)
        })
        .catch((err) => {
            console.log("Error deleting favorite:", err)
        })
    }

    return (
        <div className="savedEventsContainer">
            <br />
            <h1>My Saved Events</h1>
            <br />
            <div>
                {faves.map((singleFave) => {
                    return(
                        <div>
                            <h3>{singleFave.myEvent.title}</h3>
                            <h5>{singleFave.myEvent.date}</h5>
                            <h5>{singleFave.myEvent.address.city}, {singleFave.myEvent.address.state}</h5>

                            <button onClick={()=>deleteFave(singleFave._id)}
                            >Delete Favorite</button>
                            <br />
                        </div>
                )})
                }
            </div>
        </div>
    );
}

export default FavoritesPage;