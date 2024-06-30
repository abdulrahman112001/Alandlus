import React, { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing marker icons
//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

interface LocationData {
  position: [number, number];
  text: string;
}

interface LocationsProps {
  data?: { point_array: [number, number]; name: string }[];
}

const Locations: React.FC<LocationsProps> = ({ data }) => {
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    if (data && data.length > 0 && mapRef.current) {
      const firstLocation = data[0].point_array;
      mapRef.current.flyTo(firstLocation, 10);
    }
  }, [data]);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  const locations: LocationData[] = data
    .filter(item => item?.point_array && item?.name)
    .map(item => ({
      position: item?.point_array,
      text: item?.name
    }));

  return (
    <div>
      <MapContainer
        center={[33.3152, 44.3661]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100%" }}
        //@ts-ignore
        whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, idx) => (
          <Marker key={idx} position={location.position}>
            <Popup>{location.text}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Locations;
