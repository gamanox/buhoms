import React from "react";

import { Col, Row, Figure } from "react-bootstrap";
import i18n from "../../../../shared/i18n";

export default function ReusableComponentIcons({
  iconImages,
  isOwlSection = false,
  nameSection,
}) {
  const iconsOwl = i18n
    .t("we-are-owl.section-two", { returnObjects: true })
    .map((item, i) => (
      <Col key={i} sm={12} md="auto" className="text-center mx-auto d-block">
        <Figure>
          <Figure.Image src={iconImages[i]} className="img-fluid" />
          <Figure.Caption
            className={`icon-section-title${isOwlSection ? `-we-are-owl` : ``}`}
          >
            {item.icon.description}
          </Figure.Caption>
        </Figure>
      </Col>
    ));
  const iconsDesign = i18n
    .t("design.section-two", { returnObjects: true })
    .map((item, i) => (
      <Col key={i} sm={12} md="auto" className="text-center mx-auto d-block">
        <Figure>
          <Figure.Image src={iconImages[i]} className="img-fluid" />
          <Figure.Caption
            className={`icon-section-title${isOwlSection ? `-we-are-owl` : ``}`}
          >
            {item.icon.description}
          </Figure.Caption>
        </Figure>
      </Col>
    ));
  const iconsPrint = i18n
    .t("print.section-two", { returnObjects: true })
    .map((item, i) => (
      <Col key={i} sm={12} md="2" className="text-center mx-auto d-block">
        <Figure>
          <Figure.Image src={iconImages[i]} className="img-fluid" />
          <Figure.Caption
            className={`icon-section-title${isOwlSection ? `-we-are-owl` : ``}`}
          >
            {item.icon.description}
          </Figure.Caption>
        </Figure>
      </Col>
    ));
  const iconsProducts = i18n
    .t("products.section-two", { returnObjects: true })
    .map((item, i) => (
      <Col key={i} sm={12} md="2" className="text-center mx-auto d-block">
        <Figure>
          <Figure.Image src={iconImages[i]} className="img-fluid" />
          <Figure.Caption
            className={`icon-section-title${isOwlSection ? `-we-are-owl` : ``}`}
          >
            {item.icon.description}
          </Figure.Caption>
        </Figure>
      </Col>
    ));
  return (
    <Row>
      {
        {
          design: iconsDesign,
          "we-are-owl": iconsOwl,
          print: iconsPrint,
          logistics: "",
          pickandpack: "",
          products: iconsProducts,
        }[nameSection]
      }
    </Row>
  );
}
