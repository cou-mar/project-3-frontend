import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import L from "leaflet";
import { MapContainer } from "react-leaflet";
import { TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const EventsPage = () => {
  const [events, setEvents] = useState(null);

  let myIcon = L.icon({
    iconUrl: require("../mapMarker.jpg"),
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
      .get("http://localhost:3001/user/see-events")
      .then((axiosResponse) => {
        console.log(axiosResponse.data);
        setEvents(axiosResponse.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>


      <div className="map">
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
                    <span>
                      <h3>{spot.name}</h3>
                      <p>{spot.street}</p>
                      <p>{spot.city}, {spot.state} {spot.zipcode}</p>
                      <p>{spot.facebookGroup}</p>
                    </span>
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

      {events &&
        events.foundEventsArray.map((singleEvent) => {
          return (
            <div>
              <h1>{singleEvent.title}</h1>
              <h2>{singleEvent.date}</h2>
              <h3>
                {singleEvent.address.street}, {singleEvent.address.city},{" "}
                {singleEvent.address.state} {singleEvent.address.zipcode}
              </h3>
              <p>{singleEvent.description}</p>
            </div>
          );
        })}
      {events &&
        events.komenArray.data.events.results.map((singleEvent) => {
          return (
            <div>
              <h1>{singleEvent.name}</h1>
              <h2>{singleEvent.startDate}</h2>
              <h3>
                {singleEvent.city}, {singleEvent.zipcode}
              </h3>
              <p>{singleEvent.locationDescription}</p>
            </div>
          );
        })}
    </div>
  );
};

export default EventsPage;
