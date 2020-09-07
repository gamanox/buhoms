import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import i18n from "../../shared/i18n";
import Bean from "../../assets/img/pages/design/section-two/icon-background-bean.svg";
import Circle from "../../assets/img/pages/design/section-two/icon-background-circle.svg";
import ImageBean from "../../assets/img/pages/somos_buho/VectorCirculoImg2.svg";
import Formulario from "../form/Form";
import Carrusel from "../carousel/Carousel";

const Products = () => {
  const headerSection = (
    <section>
      <Container fluid className="m-0 p-0 bg-dark">
        <Row className="justify-content-md-center">
          <Col md={{ span: 10, offset: 1 }}>
            <h1 className="products-title-header pt-5">
              {i18n.t("products.header.title")}
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={{ span: 10, offset: 1 }}>
            <p className="products-description-header">
              {i18n.t("products.header.description")}
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center pt-5">
          <Col md={{ span: 10, offset: 1 }}>
            <p className="products-sub-header-title">
              {i18n.t("products.sub-header.title")}
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center mt-0">
          <Col md={{ span: 10, offset: 1 }}>
            <p className="products-sub-header-description">
              {i18n.t("products.sub-header.description")}
            </p>
          </Col>
        </Row>
        <Row className="bg-light justify-content-md-center pt-5">
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <Col md="4" className="mt-5">
                <h1 className="products-title-section-two">
                  {i18n.t("products.section-two.first-section.title", {
                    returnObjects: true,
                  })}
                </h1>
                <p className="products-description-section-two text-break">
                  {i18n
                    .t("products.section-two.first-section.description")
                    .toString()}
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
                <h1 className="products-title-section-two">
                  {i18n.t("products.section-two.second-section.title")}
                </h1>
                <p className="products-description-section-two text-break">
                  {i18n.t("products.section-two.second-section.description")}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="bg-light justify-content-md-center pt-5">
          <Col md={{ span: 10, offset: 1 }}>
            <Row className="mt-5">
              <Col md="4">
                <h1 className="products-title-section-two">
                  {i18n.t("products.section-two.third-section.title")}
                </h1>
                <p className="products-description-section-two text-break">
                  {i18n.t("products.section-two.third-section.description")}
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
                <h1 className="products-title-section-two">
                  {i18n.t("products.section-two.quarter-section.title")}
                </h1>
                <p className="products-description-section-two text-break">
                  {i18n.t("products.section-two.quarter-section.description")}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="bg-light justify-content-md-center pt-5">
          <Col md={{ span: 10, offset: 1 }}>
            <Row className="mt-5">
              <Col md="4">
                <h1 className="products-title-section-two">
                  {i18n.t("products.section-two.fifth-section.title")}
                </h1>
                <p className="products-description-section-two text-break">
                  {i18n.t("products.section-two.fifth-section.description")}
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
          <Carrusel backgroundPath="products" />
        </Row>
        <Row>
          <Formulario sectionName="products" />
        </Row>
      </Container>
    </section>
  );

  return headerSection;
};

export default Products;
