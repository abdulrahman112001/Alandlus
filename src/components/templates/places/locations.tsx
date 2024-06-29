import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
//@ts-ignore

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const locations = [
  { position: [33.3152, 44.3661], text: "Baghdad, Iraq. A city with a rich history." },
  { position: [30.0444, 31.2357], text: "Cairo, Egypt. The capital of Egypt." },
  { position: [24.7136, 46.6753], text: "Riyadh, Saudi Arabia. The capital of Saudi Arabia." },
];

function Locations() {
  return (
    <div>
      <MapContainer
        center={[33.3152, 44.3661]} // مركز الخريطة يمكن أن يكون في أي مكان مناسب
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, idx) => (
//@ts-ignore

          <Marker key={idx} position={location.position}>
            <Popup>{location.text}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Locations;
