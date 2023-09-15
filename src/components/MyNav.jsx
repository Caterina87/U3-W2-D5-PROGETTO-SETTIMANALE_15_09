import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/assets/pexels-photo-1486861.jpeg"
            width="100"
            height="80"
            className="d-inline-block align-top"
            alt="Meteo logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#details">Details</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
