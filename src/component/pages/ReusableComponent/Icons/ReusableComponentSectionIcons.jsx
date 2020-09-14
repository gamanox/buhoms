import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import ReusableComponentIcons from "./ReusableComponentIcons";
import i18n from "../../../../shared/i18n";

import iconOne from "../../../../assets/img/pages/design/section-one-icons/graphic-one-section-one.svg";
import iconTwo from "../../../../assets/img/pages/design/section-one-icons/graphic-two-section-one.svg";
import iconThree from "../../../../assets/img/pages/design/section-one-icons/graphic-three-section-one.svg";
import iconFour from "../../../../assets/img/pages/design/section-one-icons/graphic-four-section-one.svg";
import iconFive from "../../../../assets/img/pages/design/section-one-icons/graphic-five-section-one.svg";

function getTitle(nameSection) {
  switch (nameSection) {
    case "we-are-owl":
      return i18n.t("we-are-owl.section-one.title");
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
  const iconImages = [
    iconOne,
    iconTwo,
    iconThree,
    iconFour,
    iconFive,
    iconFive,
  ];
  return (
    <Container
      fluid
      className="background-color-section-two spacing-between-sections"
    >
      <Row className="justify-content-md-center">
        <Col xs={12} md={10}>
          <h1 className="section-two-title">{getTitle(nameSection)}</h1>
          <p className="section-two-description">
            {getDescription(nameSection)}
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center pt-5">
        <ReusableComponentIcons
          iconImages={iconImages}
          nameSection={nameSection}
        />
      </Row>
    </Container>
  );
}
