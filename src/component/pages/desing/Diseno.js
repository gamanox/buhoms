import React from "react";
import { Container, Col, Row, Figure, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "../../../shared/i18n";
import iconOne from "../../../assets/img/pages/design/section-one-icons/graphic-one-section-one.svg";
import iconTwo from "../../../assets/img/pages/design/section-one-icons/graphic-two-section-one.svg";
import iconThree from "../../../assets/img/pages/design/section-one-icons/graphic-three-section-one.svg";
import iconFour from "../../../assets/img/pages/design/section-one-icons/graphic-four-section-one.svg";
import iconFive from "../../../assets/img/pages/design/section-one-icons/graphic-five-section-one.svg";
import Bean from "../../../assets/img/pages/design/section-two/icon-background-bean.svg";
import Circle from "../../../assets/img/pages/design/section-two/icon-background-circle.svg";
import ImageBean from "../../../assets/img/pages/somos_buho/VectorCirculoImg2.svg";
import Formulario from "../../form/Form";
import Carrusel from "../../carousel/Carousel";
const icons = [iconOne, iconTwo, iconThree, iconFour, iconFive];
const iconsComponent = i18n
  .t("design.section-two", { returnObjects: true })
  .map((item, i) => (
    <Col md="2" sm="12" key={i}>
      <Figure className="p-1 m-1 text-center">
        <Figure.Image src={icons[i]} className="pl-0 ml-0" />
        <Figure.Caption className="icon-description-text">
          {item.icon.description}
        </Figure.Caption>
      </Figure>
    </Col>
  ));

function Diseno() {
  const { t } = useTranslation();
  const headerSection = (
    <section>
      <Container fluid className="m-0 p-0 bg-dark">
        <Row className="justify-content-md-center">
          <Col md={{ span: 10, offset: 1 }}>
            <h1 className="title-header pt-5">{t("design.header.title")}</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={{ span: 10, offset: 1 }}>
            <p className="description-header">
              {t("design.header.description")}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <p className="title-section-one pt-5 mt-0">
              {t("design.section-one.title")}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <p className="description-section-one mt-offset">
              {t("design.section-one.description")}
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">{iconsComponent}</Row>
        <Row className="bg-light justify-content-md-center pt-5">
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <Col md="4" className="mt-5">
                <h1 className="titles-section-two">
                  {t("design.section-three.first-section.title")}
                </h1>
                <p className="description-section-two text-break">
                  {t("design.section-three.first-section.description")}
                </p>
              </Col>
              <Col md="8" className="align-middle">
                <Image src={Bean} className="img-parent" />
                <Image src={ImageBean} className="img-child" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="bg-light justify-content-md-center pt-5">
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <Col md="8" className="align-middle">
                <Image src={ImageBean} className="img-child" />
              </Col>
              <Col md="4" className="mt-5">
                <h1 className="titles-section-two">
                  {t("design.section-three.second-section.title")}
                </h1>
                <p className="description-section-two text-break">
                  {t("design.section-three.second-section.description")}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="bg-light justify-content-md-center pt-5">
          <Col md={{ span: 10, offset: 1 }}>
            <Row className="mt-5">
              <Col md="4">
                <h1 className="titles-section-two">
                  {t("design.section-three.third-section.title")}
                </h1>
                <p className="description-section-two text-break">
                  {t("design.section-three.third-section.description")}
                </p>
              </Col>
              <Col md="8" className="align-middle">
                <Image src={Circle} className="img-parent-circle" />
                <Image src={ImageBean} className="img-child" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="bg-light justify-content-md-center pt-5">
          <Col md={{ span: 10, offset: 1 }}>
            <Row className="mt-5">
              <Col md="8" className="align-middle">
                <Image src={Bean} className="img-parent" />
                <Image src={ImageBean} className="img-child" />
              </Col>
              <Col md="4">
                <h1 className="titles-section-two">
                  {t("design.section-three.quarter-section.title")}
                </h1>
                <p className="description-section-two text-break">
                  {t("design.section-three.quarter-section.description")}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="bg-light justify-content-md-center pt-5">
          <Col md={{ span: 10, offset: 1 }}>
            <Row className="mt-5">
              <Col md="4">
                <h1 className="titles-section-two">
                  {t("design.section-three.fifth-section.title")}
                </h1>
                <p className="description-section-two text-break">
                  {t("design.section-three.fifth-section.description")}
                </p>
              </Col>
              <Col md="8" className="align-middle">
                <Image src={Circle} className="img-parent-circle" />
                <Image src={ImageBean} className="img-child" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Carrusel backgroundPath="design" />
        </Row>
        <Row>
          <Formulario sectionName="design" />
        </Row>
      </Container>
    </section>
  );

  return headerSection;
}

export default Diseno;
