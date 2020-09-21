import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import ReusableComponentIcons from "../Icons/ReusableComponentIcons";

import i18n from "../../../../shared/i18n";
import Group39 from "../../../../assets/img/pages/somos_buho/Group39.svg";
import Group40 from "../../../../assets/img/pages/somos_buho/Group40.svg";
import Group45 from "../../../../assets/img/pages/somos_buho/Group45.svg";
import Group46 from "../../../../assets/img/pages/somos_buho/Group46.svg";
import Group47 from "../../../../assets/img/pages/somos_buho/Group47.svg";

export default function ReusableComponentSectionContent() {
  const GroupImagesSection = [Group39, Group40, Group45, Group46, Group47];
  return (
    <Container fluid>
      <Row className="px-5 justify-content-center bg-light pt-5 text-center">
        <Col xs={12} md={10}>
          <h3 className="content-title">
            {i18n.t("we-are-owl.special-section.title")}
          </h3>
        </Col>
      </Row>
      <Row className="px-5 justify-content-center bg-light mt-0 pb-5">
        <Col xs={12} md={8}>
          <p className="content-description">
            {i18n.t("we-are-owl.special-section.description")}
          </p>
        </Col>
      </Row>
      <Row className="px-5 justify-content-center pb-5 bg-light">
        <ReusableComponentIcons
          nameSection="we-are-owl"
          iconImages={GroupImagesSection}
          isOwlSection={true}
        />
      </Row>
    </Container>
  );
}
