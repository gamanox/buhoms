import React from "react";
import { Row, Col } from "react-bootstrap";
import ReusableComponentCardParalax from "./ReusableComponentCardParalax";
import VectorCirculo from "../../../../assets/img/pages/somos_buho/VectorCirculo.svg";
import VectorCirculoImg from "../../../../assets/img/pages/somos_buho/VectorCirculoImg.svg";
import i18n from "../../../../shared/i18n";

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

export default function ReusableComponentContent({ nameSection }) {
  const owl = i18n
    .t("we-are-owl.content", { returnObjects: true })
    .map((item, id) => (
      <Row
        className="bg-light justify-content-md-center spacing-between-sections"
        key={id}
      >
        <Col md={{ span: 10, offset: 1 }}>
          <Row>
            <Col md="4" className={`mt-5 ${id / 2 ? `order-last` : ``}`}>
              <h1 className={`${nameSection} title-section-two`}>
                {item.title}
              </h1>
              <p className="description-section-two text-break">
                {item.description}
              </p>
            </Col>
            <Col md="8" className="align-middle">
              <ReusableComponentCardParalax
                mainPicture={VectorCirculoImg}
                backgroundImage={VectorCirculo}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    ));
  return owl;
}
