import {
  Navbar,
  Nav,
  Form,
  Container,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { DataContext } from "../../Data/DataContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
function Home(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <NavLink to="../../home">
          <Navbar.Brand>Job Engine Search</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="../../home">Home</Nav.Link>

            <Nav.Link href="../../profile">Profile</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
