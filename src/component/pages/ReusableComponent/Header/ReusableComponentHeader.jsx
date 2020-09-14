import React from "react";
import i18n from "../../../../shared/i18n";
import { Col, Row } from "react-bootstrap";

function getTitle(nameSection) {
  switch (nameSection) {
    case "we-are-owl":
      return i18n.t("we-are-owl.header.title");
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
export default function ReusableComponentHeader({ nameSection }) {
  return (
    <Row className="justify-content-md-center spacing-between-sections">
      <Col xs={12} md={10}>
        <h1 className={`${nameSection}`}>{getTitle(nameSection)}</h1>
        <p className="section-one-description text-justify">
          {getDescription(nameSection)}
        </p>
      </Col>
    </Row>
  );
}
