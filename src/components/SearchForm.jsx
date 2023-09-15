import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const SearchForm = (props) => {
  const location = useLocation();
  return (
    <Container>
      <Form className="mt-5 mb-5">
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Control type="text" placeholder="Enter the City..." />
          <Form.Text className="text-light mt-1">Enter the city you're interested in...</Form.Text>
        </Form.Group>
        <Link className={`nav-link ${location.pathname === "WeatherDetails" && "active"}`} to="WeatherDetails">
          <Button className="mt-2 mb-5" variant="secondary" type="submit">
            Go to Weather Forecasts...
          </Button>
        </Link>
      </Form>
    </Container>
  );
};
export default SearchForm;
