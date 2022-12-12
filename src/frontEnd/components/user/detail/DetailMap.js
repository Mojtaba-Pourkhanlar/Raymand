import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const DetailMap = ({ geo }) => {

  const containerStyle = {
    width: "100%",
    height: "420px",
  };
  const center = {
    lat: +geo.lat,
    lng: +geo.lng,
  };

  return (
    <div>
      {/* <LoadScript googleMapsApiKey="Please enter your api key"> */}
      <LoadScript>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          <Marker position={center}> </Marker>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default DetailMap;
