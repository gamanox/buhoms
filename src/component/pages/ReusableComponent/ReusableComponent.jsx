import React from "react";

import { Row } from "react-bootstrap";
import ReusableComponentHeader from "./Header/ReusableComponentHeader";
import ReusableComponentSectionIcons from "./Icons/ReusableComponentSectionIcons";
import ReusableComponentContent from "./Content/ReusableComponentContent";
import ReusableComponentSectionContent from "./Content/ReusableComponentSectionContent";
import Formulario from "../../form/Form";
import Carrusel from "../../carousel/Carousel";

import "./_ReusableComponent.sass";
import "./_ReusableComponentResponsive.sass";

export default function ReusableComponent({ nameSection }) {
  return (
    <section>
      <ReusableComponentHeader nameSection={nameSection} />
      <ReusableComponentSectionIcons nameSection={nameSection} />
      {nameSection === "we-are-owl" && <ReusableComponentSectionContent />}
      <ReusableComponentContent nameSection={nameSection} />
      <Row>
        <Carrusel backgroundPath={nameSection} />
      </Row>
      <Row>
        <Formulario sectionName={nameSection} />
      </Row>
    </section>
  );
}
