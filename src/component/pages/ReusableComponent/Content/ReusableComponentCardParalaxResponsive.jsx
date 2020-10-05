import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

export const ReusableComponentCardParalaxResponsive = ({ picture }) => {
  return (
    <Container className="card-parallax-responsive">
      <Row>
        <Col>
          <Image src={picture} className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};
