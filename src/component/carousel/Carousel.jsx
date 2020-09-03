import React from "react";
import { Col, Row, Carousel } from "react-bootstrap";

import { useTranslation } from "react-i18next";
const Carrusel = () => {
  const { t } = useTranslation();
  return (
    <Row className="justify-content-md-center carrusel-container align-items-center pt-5">
      <Col md={7} xs={12}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 imagenes" border="0px" alt="" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 imagenes" border="0px" alt="" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 imagenes" border="0px" alt="" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row className="justify-content-md-center mt-5">
          <Col md={3} xs={12}>
            <h1 className="text-center text-dark">{t("Carrusel.subtitulo")}</h1>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Carrusel;
