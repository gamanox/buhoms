import React from "react";
import i18n from "../../../../shared/i18n";
import { Col, Row } from "react-bootstrap";

function getTitle(nameSection) {
  switch (nameSection) {
    case "we-are-owl":
      return i18n.t("we-are-owl.header.title");
    case "design":
      return i18n.t("design.header.title");
    case "print":
      return i18n.t("print.header.title");
    case "logistics":
      return i18n.t("logistics.header.title");
    case "pickandpack":
      return i18n.t("pickandpack.header.title");
    case "products":
      return i18n.t("products.header.title");
    default:
      break;
  }
}
function getDescription(nameSection) {
  switch (nameSection) {
    case "we-are-owl":
      return i18n.t("we-are-owl.header.description");
    case "design":
      return i18n.t("design.header.description");
    case "print":
      return i18n.t("print.header.description");
    case "logistics":
      return i18n.t("logistics.header.description");
    case "pickandpack":
      return i18n.t("pickandpack.header.description");
    case "products":
      return i18n.t("products.header.description");
    default:
      break;
  }
}

function getDescriptionTwo(nameSection) {
  switch (nameSection) {
    case "we-are-owl":
      return "";
    case "design":
      return "";
    case "print":
      return i18n.t("print.header.descriptiontwo");
    case "logistics":
      return "";
    case "pickandpack":
      return "";
    case "products":
      return "";
    default:
      break;
  }
}

export default function ReusableComponentHeader({ nameSection }) {
  return (
    <Row
      className="px-5  spacing-between-sections"
      style={{ background: "rgba(15, 16, 18, 1)" }}
    >
      <Col lg={{ span: "8", offset: "2" }} sm={{ span: "12" }} className="py-5">
        <h1 className={`title ${nameSection}`}>{getTitle(nameSection)}</h1>
        <p className="section-one-description text-justify">
          {getDescription(nameSection)}
        </p>
        <p className="section-two-descriptiontwo">
            {getDescriptionTwo(nameSection)}
          </p>
      </Col>
    </Row>
  );
}
