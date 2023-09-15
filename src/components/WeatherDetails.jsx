import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const WeatherDetails = () => {
  // const [weather, setWeather] = useState([]);
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.content);
  const baseEndpoint = "http://api.openweathermap.org/data/2.5/weather?q=";
  let data = "";
  const weather = useSelector((state) => state.weather.content);
  useEffect(() => {
    getWeather();
  }, [location]);

  const getWeather = async () => {
    try {
      const response = await fetch(baseEndpoint + location + "&APPID=3288d120ce297c00000e9f09db5e531a");
      if (response.ok) {
        data = await response.json();
        dispatch({
          type: "ADD_WEATHER",
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <h3>City Name: {location}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </Container>
  );
};

export default WeatherDetails;
