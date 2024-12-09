const WeatherDetails = ({ temp, location, loading }) => {
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : location && temp ? (
        <p>
          Current temperature in {location} is {temp} F
        </p>
      ) : (
        <p>Please search a location</p>
      )}
    </>
  );
};

export default WeatherDetails;