import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import i18n from "../../shared/i18n";
import logo_img from "../../assets/img/layout/navigation/logo_img.svg";
import logo_texto from "../../assets/img/layout/navigation/logo_texto.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

library.add(fab, faBars);

const Navigation = React.memo(({ callback }) => {
  const changeLanguage = (lng) => {
    console.log("changeLanguage: " + lng);
    i18n.changeLanguage(lng);
  };
  // eslint-disable-next-line
  const Bars = <FontAwesomeIcon icon={faBars} size="2x" />;
  const CustomNavbar = (
    <Navbar collapseOnSelect expand="sm" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand onClick={callback}>
          <img
            alt="Logo tipo de Búho"
            src={logo_img}
            width="31"
            height="28"
            className="d-inline-block align-bottom"
          />
          <span>&nbsp;</span>
          <img
            alt="Búho"
            src={logo_texto}
            width="80"
            height="28"
            className="d-inline-block align-top m-0"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="text-light" onClick={() => changeLanguage("es")}>
            ES
          </Nav.Link>
          <span className="text-light align-bottom pt-2 pb-2">|</span>
          <Nav.Link className="text-light" onClick={() => changeLanguage("en")}>
            EN
          </Nav.Link>
          <div className="d-inline-block align-top mt-1 ml-5 text-light">
            <div id="render">
              <HamburgerButton />
            </div>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
  return CustomNavbar;
});

export default Navigation;
