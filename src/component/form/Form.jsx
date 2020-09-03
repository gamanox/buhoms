import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Form, Button, Image } from "react-bootstrap";

import email from "../../assets/img/component/formulario/email.svg";
import facebook from "../../assets/img/component/formulario/facebook.svg";
import insta from "../../assets/img/component/formulario/insta.svg";
import telefono from "../../assets/img/component/formulario/telefono.svg";
import ubicacion from "../../assets/img/component/formulario/ubicacion.svg";

const Formulario = () => {
  const { t } = useTranslation();
  return (
    <Row className="Formulario pt-5">
      <Col xs={{ span: 10, offset: 1 }} md={(5, { span: 5, offset: 1 })}>
        <h1 className="titulo text-white">{t("Formulario.titulo")}</h1>
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>
            <Image src={ubicacion} className="center" />
            <p className="info">{t("Formulario.ubicacion")}</p>
            <p className="info">{t("Formulario.link")}</p>
          </Col>
          <Col xs={{ span: 10, offset: 1 }}>
            <Image src={telefono} />
            <p className="info">{t("Formulario.numero")}</p>
            <Image src={email} />
            <p className="info">{t("Formulario.email")}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>
            <Image src={facebook} />
            <Image src={insta} className="ml-3" />
          </Col>
        </Row>
      </Col>
      <Col xs={{ span: 10, offset: 1 }} md={(5, { span: 5, offset: 0 })}>
        <h1 className="titulo2">{t("Formulario.titulo2")}</h1>
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
            className="btn-outline-enviar float-right"
          >
            {t("Formulario.boton")}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default Formulario;
