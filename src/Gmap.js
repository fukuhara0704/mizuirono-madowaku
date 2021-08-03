import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
//   lat:34.7201028, 
//   lng:134.8595243,
  lat:34.720102, 
  lng:134.859524,
};

const Gmap = () => {
  return (
    <LoadScript googleMapsApiKey="API Key">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Gmap;