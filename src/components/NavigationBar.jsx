import { Container, Nav, Navbar } from "react-bootstrap";
import myLogo from "../assets/Mylogo.png";

const NavigationBar = () => {
  return (
    <Navbar
      className="fixed-top navbar"
      collapseOnSelect
      expand="md"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          <img
            src={myLogo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="myLogo.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav activeKey="/" className="ms-auto">
            <Nav.Link href="#home" className="mx-4 text-white text-center">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="mx-4 text-white text-center">
              About
            </Nav.Link>
            <Nav.Link href="#portfolio" className="mx-4 text-white text-center">
              Portfolio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
