import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={{ lat: latitude, lng: longitude }}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "50vh", width: "50%", zIndex: "1" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>I am a pop-up!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
