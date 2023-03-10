import { useState, useEffect } from "react";

import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import L from "leaflet";
import { MapContainer } from "react-leaflet";
import { TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const EventsPage = () => {

    const navigate = useNavigate()

  const [events, setEvents] = useState(null);

  let myIcon = L.icon({
    iconUrl: require("../mapMarker.png"),
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });

  const [map, setMap] = useState({
    lat: 35.839333,
    lng: -88.270020,
    zoom: 5,
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/see-events`)
      .then((axiosResponse) => {
        console.log(axiosResponse.data);
        setEvents(axiosResponse.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="events-page">


      <div>
        <MapContainer
          className="mapContainer"
          id={"tagMap"}
          center={[map.lat, map.lng]}
          zoom={map.zoom}
          style={{ width: "90%", height: "80vh" }}
        >
          <TileLayer
            attribution='&copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {events &&
        events.komenArray.data.events.results.map((spot) => {
            const point = [
              Number(spot.lat),
              Number(spot.lng),
            ];

            return (
              point[0] && (
                <Marker icon={myIcon} position={point} key={spot["_id"]}>
                  <Popup>
                    <div>
                      <h3>{spot.name}</h3>
                      <p>{spot.street}</p>
                      <p>{spot.city}, {spot.state} {spot.zipcode}</p>
                      <p>{spot.facebookGroup}</p>
                      <button onClick={()=> {
                                axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/create-event`, {
                                        title: spot.name,
                                        date: spot.startDate,
                                        address: {
                                            street: spot.street,
                                            city: spot.city,
                                            state: spot.state,
                                            zipcode: spot.zipcode
                                            },
                                        location: {
                                            latitude: Number(spot.lat),
                                            longitude: Number(spot.lng)
                                        }

                                      })
                                      .then((newEvent) => {
                                        navigate(`/see-event/${newEvent.data._id}`)
                                        console.log("Added event", newEvent.data)
                                      })
                                      .catch((err) => {console.log("Error adding event:", err)})
                      }}>Event Details</button>
                    </div>
                    {/* <br />
                    <span>
                      <Link to={`/${spot._id}/details`}>Details</Link>
                    </span>
                    <br /> */}
                    {/* <img
                      src={spot.imageUrl}
                      alt="testimage"
                      className="previewImage"
                    /> */}
                  </Popup>
                </Marker>
              )
            );
          })}
        </MapContainer>
      </div>

<div className="data">
      {events &&
        events.foundEventsArray.map((singleEvent) => {
          return (
            <div className="eventsContainer">
            <div className="events-content-div">

                <div>
              <div className="eventsBox"><h2>{singleEvent.title}</h2></div>
              <div className="eventsBox"><h3>{singleEvent.date}</h3></div>
              <div className="eventsBox"><h3>
                {singleEvent.address.street}, {singleEvent.address.city},{" "}
                {singleEvent.address.state} {singleEvent.address.zipcode}
              </h3></div>
              <div className="eventsBox"><p>{singleEvent.description}</p></div>

                </div>


            <div className="events-button-div">

              <button onClick={()=>navigate(`/see-event/${singleEvent._id}`)}>Details</button>

            </div>




            </div>
            </div>
          );
        })}
      {events &&
        events.komenArray.data.events.results.map((singleEvent) => {
          return (
            <div className="eventsContainer">


            <div className="events-content-div">

            <div>

              <h2>{singleEvent.name}</h2>
              <h3>{singleEvent.startDate}</h3>
              <h3>
                {singleEvent.city}, {singleEvent.zipcode}
              </h3>
              <p>{singleEvent.locationDescription}</p>


            </div>


            <div className="events-button-div">

              <button onClick={()=> {
                                axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/create-event`, {
                                        title: singleEvent.name,
                                        date: singleEvent.startDate,
                                        address: {
                                            street: singleEvent.street,
                                            city: singleEvent.city,
                                            state: singleEvent.state,
                                            zipcode: singleEvent.zipcode
                                            },
                                        location: {
                                            latitude: Number(singleEvent.lat),
                                            longitude: Number(singleEvent.lng)
                                        }

                                      })
                                      .then((newEvent) => {
                                        navigate(`/see-event/${newEvent.data._id}`)
                                        console.log("Added event", newEvent.data)
                                      })
                                      .catch((err) => {console.log("Error adding event:", err)})
                      }}>Details</button>



            </div>




            </div>
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default EventsPage;