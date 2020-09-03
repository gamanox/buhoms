import React from "react";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import i18n from "../../shared/i18n";
import logo_img from "../../assets/img/layout/navigation/logo_img.svg";
import logo_texto from "../../assets/img/layout/navigation/logo_texto.svg";

const Navigation = React.memo(({ callback }) => {
  const changeLanguage = (lng) => {
    console.log("changeLanguage: " + lng);
    i18n.changeLanguage(lng);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className="bg-transparent"
    >
      <Container>
        <Navbar.Brand onClick={callback}>
          <img
            alt=""
            src={logo_img}
            width="31"
            height="19"
            className="d-inline-block align-bottom"
          />{" "}
          <img
            alt=""
            src={logo_texto}
            width="80"
            height="28"
            className="d-inline-block align-top m-0"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link
              className="nav-item nav-link nav-link-fuente ml-5 text-white"
              to="/LoQueHacemos"
            >
              Lo que hacemos
            </Nav.Link>
            <Nav.Link
              className="nav-item nav-link nav-link-fuente ml-5 text-white"
              to="/AcercaDeBuho"
            >
              Acerca de Búho
            </Nav.Link>
          </Nav>
          <Nav className="">
            <Nav.Link
              className="text-white"
              onClick={() => changeLanguage("es")}
            >
              ES
            </Nav.Link>
            <span className="text-white align-bottom pt-2 pb-2">|</span>
            <Nav.Link
              className="text-white"
              onClick={() => changeLanguage("en")}
            >
              EN
            </Nav.Link>
            <Form inline className="ml-5">
              <Button variant="outline-light">Contáctanos</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default Navigation;
