import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Form, Button } from "react-bootstrap";

import { IconsComponentsEmail } from "../IconsComponents/IconsComponentsEmail";
import { IconsCompoenentsPhone } from "../IconsComponents/IconsCompoenentsPhone";
import { IconsComponentsFacebook } from "../IconsComponents/IconsComponentsFacebook";
import { IconsComponentsInstagram } from "../IconsComponents/IconsComponentsInstagram";
import { IconsComponentsPin } from "../IconsComponents/IconsComponentsPin";

function fillColor(sectionName) {
  switch (sectionName) {
    case "we-are-owl":
      return "#00FF00";
    case "design":
      return "#00ffea";
    case "print":
      return "#FF0054";
    case "logistics":
      return "#FFF000";
    case "pickandpack":
      return "#A31BFF";
    case "products":
      return "#0047FF";

    default:
      return "#00FF00";
  }
}

const Formulario = ({ sectionName }) => {
  const { t } = useTranslation();

  return (
    <Row className="Formulario pt-5">
      <Col xs={{ span: 10, offset: 1 }} md={(5, { span: 5, offset: 1 })}>
        <h1 className={`titulo text-white `}>{t("Formulario.titulo")}</h1>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} sm={12} lg={6} className="ml-0 ">
            <Row>
              <Col xs={12} sm={12} lg={2}>
                <IconsComponentsPin fill={fillColor(sectionName)} />
              </Col>
              <Col xs={12} sm={12} lg={10}>
                <p className="info">{t("Formulario.ubicacion")}</p>
                <p className="info">{t("Formulario.link")}</p>
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 10, offset: 1 }} sm={12} lg={6} className="ml-0">
            <Row>
              <Col xs={12} sm={12} lg={2}>
                <IconsCompoenentsPhone fill={fillColor(sectionName)} />
              </Col>
              <Col xs={12} sm={12} lg={10}>
                <p className="info">{t("Formulario.numero")}</p>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={12} sm={12} lg={2}>
                <IconsComponentsEmail fill={fillColor(sectionName)} />
              </Col>
              <Col xs={12} sm={12} lg={10}>
                <p className="info">{t("Formulario.email")}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="float-rigth ml-5" sm="auto">
            <IconsComponentsFacebook fill={fillColor(sectionName)} />
          </Col>
          <Col sm="auto">
            <IconsComponentsInstagram fill={fillColor(sectionName)} />
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </Col>
      <Col xs={{ span: 10, offset: 1 }} md={(5, { span: 5, offset: 0 })}>
        <h1 className={`titulo2 ${sectionName} `}>{t("Formulario.titulo2")}</h1>
        <Form>
          <Form.Group controlId="formBasicNombre">
            <Form.Label className="label">{t("Formulario.campo1")}</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="label">{t("Formulario.campo2")}</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmpresa">
            <Form.Label className="label">{t("Formulario.campo3")}</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formBasicProyecto">
            <Form.Label className="label">{t("Formulario.campo4")}</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button
            variant="outline-light"
            className={`btn-outline-enviar float-right ${sectionName}-border`}
          >
            {t("Formulario.boton")}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default Formulario;
