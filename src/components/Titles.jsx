import React from "react";
import { Container } from "react-bootstrap";

const Titles = () => (
  <Container>
    <h1 className="title-container__title mb-3 text-secondary font-weight-bold ">My Weather Finder </h1>
    <h4 className="title-container__subtitle mb-3 text-secondary">
      Hourly and up to five-day forecasts for customized locations across the entire national territory, evolution on
      map of the main atmospheric parameters, always updated videos and podcasts
    </h4>
  </Container>
);

export default Titles;
