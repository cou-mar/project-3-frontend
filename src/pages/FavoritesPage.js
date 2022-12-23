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

    const deleteFav = (id) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/favorite/${id}/delete`)
        .then((deleted) => {
            let newFavsArray = faves.filter((fav) => fav._id !== deleted.data._id)
            setFaves(newFavsArray)
            console.log("We deleted this favorite:", deleted)
        })
        .catch((err) => {
            console.log("Error deleting favorite:", err)
        })
    }

    return (
        <div>
            <h1>My Saved Events</h1>

            <div>
                {faves.map((singleFave) => {
                    return(
                        <div>

                        <h3>{singleFave.myEvent.title}</h3>

                        <button onClick={()=>deleteFav(singleFave._id)}
                        >Delete Favorite</button>

                        </div>
                )})
                }
            </div>
        </div>
    );
}

export default FavoritesPage;