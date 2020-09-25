import React, { Component } from "react";
import { Container, Col, Row, Jumbotron } from "react-bootstrap";
import img1 from "../assets/img/pages/lo_que_hacemos/buho_somos.png";

export class LoQueHacemos extends Component {
  render() {
    return (
      <Col xs={12}>
        <Row className="scene_solutions h-100 align-items-center align-middle justify-content-center">
          <Col md="auto">
            <h1 className="display-3 text-center">Búho Solutions</h1>
            <p className="lead text-center text-muted">
              Expertos trabajando con expertos.
            </p>
          </Col>
        </Row>
        <Row className="h-20 justify-content-center mt-5 mb-5">
          <Col xs={11}>
            <h4>
              BÚHO Solutions es la compañía para los mercados modernos. Ayudamos
              a marcas de alcance mundial, con presencia nacional o
              emprendedores con startUps a ser competitivas en un mundo
              hambriento de consistencia, uniqueness y mejores experiencias.
            </h4>
          </Col>
        </Row>
        <Row className="h-20 justify-content-center mt-5 mb-5">
          <Col xs={11} sm={9} md={5}>
            <img src={img1} className="display-2 img-fluid" alt="img1" />
          </Col>
          <Col xs={11} sm={3} md={5}>
            <h1 className="display-1 text-left">Acerca de nosotros</h1>
            <p>
              BÚHO Solutions es la compañía para los mercados modernos. Ayudamos
              a marcas de alcance mundial, con presencia nacional o
              emprendedores con startUps a ser competitivas en un mundo
              hambriento de consistencia, uniqueness y mejores experiencias.
            </p>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default LoQueHacemos;
