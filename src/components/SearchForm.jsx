import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const SearchForm = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

  const baseEndpoint = "http://api.openweathermap.org/data/2.5/weather?q=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&APPID=3288d120ce297c00000e9f09db5e531a");
      if (response.ok) {
        const data = await response.json();
        setWeather(data.weather);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="mt-5 mb-5">
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Control type="search" value={query} onChange={handleChange} placeholder="Enter the City..." />
          <Form.Text className="text-light mt-1">Enter the city you're interested in...</Form.Text>
        </Form.Group>
        <Link className={`nav-link ${location.pathname === "WeatherDetails" && "active"}`} to="WeatherDetails">
          <Button
            className="mt-2 mb-5"
            variant="secondary"
            onClick={() => {
              dispatch({ type: "ADD_LOCATION", payload: query });
            }}
          >
            Go to Weather Forecasts...
          </Button>
        </Link>
      </Form>
    </Container>
  );
};
export default SearchForm;
