import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import ReusableComponentIcons from "./ReusableComponentIcons";
import i18n from "../../../../shared/i18n";

import iconOneOwl from "../../../../assets/Iconography/WeAreOwl/iconOne.svg";
import iconTwoOwl from "../../../../assets/Iconography/WeAreOwl/iconTwo.svg";
import iconThreeOwl from "../../../../assets/Iconography/WeAreOwl/iconThree.svg";
import iconFourOwl from "../../../../assets/Iconography/WeAreOwl/iconFour.svg";
import iconFiveOwl from "../../../../assets/Iconography/WeAreOwl/iconFive.svg";

import iconOneDesign from "../../../../assets/Iconography/Design/iconOne.svg";
import iconTwoDesign from "../../../../assets/Iconography/Design/iconTwo.svg";
import iconThreeDesign from "../../../../assets/Iconography/Design/iconThree.svg";
import iconFourDesign from "../../../../assets/Iconography/Design/iconFour.svg";
import iconFiveDesign from "../../../../assets/Iconography/Design/iconFive.svg";

import iconOnePrint from "../../../../assets/Iconography/Print/iconOne.svg";
import iconTwoPrint from "../../../../assets/Iconography/Print/iconTwo.svg";
import iconThreePrint from "../../../../assets/Iconography/Print/iconThree.svg";
import iconFourPrint from "../../../../assets/Iconography/Print/iconFour.svg";
import iconFivePrint from "../../../../assets/Iconography/Print/iconFive.svg";
import iconSixPrint from "../../../../assets/Iconography/Print/iconSix.svg";

import iconOneProduct from "../../../../assets/Iconography/Product/iconOne.svg";
import iconTwoProduct from "../../../../assets/Iconography/Product/iconTwo.svg";
import iconThreeProduct from "../../../../assets/Iconography/Product/iconThree.svg";
import iconFourProduct from "../../../../assets/Iconography/Product/iconFour.svg";
import iconFiveProduct from "../../../../assets/Iconography/Product/iconFive.svg";
import iconSixProduct from "../../../../assets/Iconography/Product/iconSix.svg";
// import ReusableComponent from "../ReusableComponent";
import { ResusableCarouselComponent } from "./ResusableCarouselComponent";

function getTitle(nameSection) {
  switch (nameSection) {
    case "we-are-owl":
      return i18n.t("we-are-owl.section-one.title");
    case "design":
      return i18n.t("design.section-one.title");
    case "print":
      return i18n.t("print.section-one.title");
    case "logistics":
      return i18n.t("logistics.section-one.title");
    case "pickandpack":
      return i18n.t("pickandpack.section-one.title");
    case "products":
      return i18n.t("products.section-one.title");
    default:
      break;
  }
}
function getDescription(nameSection) {
  switch (nameSection) {
    case "we-are-owl":
      return i18n.t("we-are-owl.section-one.description");
    case "design":
      return i18n.t("design.section-one.description");
    case "print":
      return i18n.t("print.section-one.description");
    case "logistics":
      return i18n.t("logistics.section-one.description");
    case "pickandpack":
      return i18n.t("pickandpack.section-one.description");
    case "products":
      return i18n.t("products.section-one.description");
    default:
      break;
  }
}

export default function ReusableComponentSectionIcons({ nameSection }) {
  const owl = [iconOneOwl, iconTwoOwl, iconThreeOwl, iconFourOwl, iconFiveOwl];
  const design = [
    iconOneDesign,
    iconTwoDesign,
    iconThreeDesign,
    iconFourDesign,
    iconFiveDesign,
  ];
  const print = [
    iconOnePrint,
    iconTwoPrint,
    iconThreePrint,
    iconFourPrint,
    iconFivePrint,
    iconSixPrint,
  ];
  const product = [
    iconOneProduct,
    iconTwoProduct,
    iconThreeProduct,
    iconFourProduct,
    iconFiveProduct,
    iconSixProduct,
  ];

  return (
    <Container
      id="section-background"
      fluid
      className="px-5 spacing-between-sections"
    >
      <Row className="">
        <Col lg={{ span: "8", offset: "2" }} sm={{ span: "12" }}>
          <h1 className="section-two-title">{getTitle(nameSection)}</h1>
          <p className="section-two-description">
            {getDescription(nameSection)}
          </p>
        </Col>
      </Row>
      <ResusableCarouselComponent />
      <Row className="icons-responsive justify-content-center pt-5">
        {
          {
            "we-are-owl": (
              <ReusableComponentIcons
                iconImages={owl}
                nameSection={nameSection}
              />
            ),
            design: (
              <ReusableComponentIcons
                iconImages={design}
                nameSection={nameSection}
              />
            ),
            print: (
              <ReusableComponentIcons
                iconImages={print}
                nameSection={nameSection}
              />
            ),
            products: (
              <ReusableComponentIcons
                iconImages={product}
                nameSection={nameSection}
              />
            ),
          }[nameSection]
        }
      </Row>
    </Container>
  );
}
