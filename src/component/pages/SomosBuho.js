import React from "react";
import { Col, Row, Figure, Image } from "react-bootstrap";
import i18n from "../../shared/i18n";
import { useTranslation } from "react-i18next";
import { useSpring, animated } from "react-spring";
import Formulario from "../form/Form";
import Carrusel from "../carousel/Carousel";
import Group10 from "../../assets/img/pages/somos_buho/Group10.svg";
import Group11 from "../../assets/img/pages/somos_buho/Group11.svg";
import Group12 from "../../assets/img/pages/somos_buho/Group12.svg";
import Group13 from "../../assets/img/pages/somos_buho/Group13.svg";
import Group14 from "../../assets/img/pages/somos_buho/Group14.svg";
import Group39 from "../../assets/img/pages/somos_buho/Group39.svg";
import Group40 from "../../assets/img/pages/somos_buho/Group40.svg";
import Group45 from "../../assets/img/pages/somos_buho/Group45.svg";
import Group46 from "../../assets/img/pages/somos_buho/Group46.svg";
import Group47 from "../../assets/img/pages/somos_buho/Group47.svg";
import VectorCirculo from "../../assets/img/pages/somos_buho/VectorCirculo.svg";
import VectorCirculoImg from "../../assets/img/pages/somos_buho/VectorCirculoImg.svg";
import VectorCirculo2 from "../../assets/img/pages/somos_buho/VectorCirculo2.svg";
import VectorCirculoImg2 from "../../assets/img/pages/somos_buho/VectorCirculoImg2.svg";

const GroupImagesSection2 = [Group10, Group11, Group12, Group13, Group14];

const Section2PuntosGrantizadosList = i18n
  .t("SomosBuho.section2.1", { returnObjects: true })
  .map((item, i) => (
    <Col className="justify-content-md-center" key={i}>
      <Figure className="border-0 text-center justify-content-center">
        <Figure.Image src={GroupImagesSection2[i]} />
        <Figure.Caption className="Sec2PunGraItemText text-2">
          {item.titulo}
        </Figure.Caption>
      </Figure>
    </Col>
  ));

const GroupImagesSection3 = [Group39, Group40, Group45, Group46, Group47];

const Section3LoQueHacemosList = i18n
  .t("SomosBuho.section3.1", { returnObjects: true })
  .map((item, i) => (
    <Col className="justify-content-center" key={i}>
      <Figure className="border-1 text-center">
        <Figure.Image src={GroupImagesSection3[i]} />
        <Figure.Caption className="Sec2PunGraItemText text-dark text-2">
          {item.titulo}
        </Figure.Caption>
      </Figure>
    </Col>
  ));

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20 + 200}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 20}px,${y / 10 - 340}px,0)`;

function CardParallax1() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className="container"
      style={{
        width: "640px",
        height: "484px",
      }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
        <Image src={VectorCirculo} />
      </animated.div>

      <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
        <Image
          src={VectorCirculoImg}
          style={{ width: "640px", height: "484px" }}
        />
      </animated.div>
    </div>
  );
}

const calc2 = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans3 = (x, y) => `translate3d(${x / 60 - 150}px,${y / 20}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 20}px,${y / 20 - 600}px,0)`;

function CardParallax2() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className="container"
      style={{
        width: "640px",
        height: "584px",
      }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc2(x, y) })}
    >
      <animated.div style={{ transform: props.xy.interpolate(trans3) }}>
        <Image src={VectorCirculo2} />
      </animated.div>

      <animated.div style={{ transform: props.xy.interpolate(trans4) }}>
        <Image src={VectorCirculoImg2} />
      </animated.div>
    </div>
  );
}

const SomosBuho = () => {
  const { t } = useTranslation();
  return (
    <section className="SomosBuho">
      <Row className="justify-content-md-center pt-5">
        <Col xs={12} md={10}>
          <h1 id="#a" className="sec1-tit">
            {t("SomosBuho.section1.titulo")}
          </h1>
          <p className="sec1-par">{t("SomosBuho.section1.parrafo")}</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center pt-5">
        <Col md={8} xs={12}>
          <h2 className="sec2-tit">{t("SomosBuho.section2.0.titulo")}</h2>
        </Col>
        <Col md={8} xs={12}>
          <p className="sec2-par">{t("SomosBuho.section2.0.parrafo")}</p>
        </Col>
      </Row>

      <Row className="justify-content-md-center pt-5 pb-5">
        <Col sm="12" md="10" lg="10">
          <Row>{Section2PuntosGrantizadosList}</Row>
        </Col>
      </Row>
      <Row className="justify-content-md-center text-black bg-light pt-5">
        <Col xs={12} md={10}>
          <h1 className="sec2-tit text-primary-buho">
            {t("SomosBuho.section3.0.titulo")}
          </h1>
        </Col>
        <Col xs={12} md={(12, { span: 6, offset: 1 })}>
          <p className="sec2-par text-black">
            {t("SomosBuho.section3.0.parrafo")}
          </p>
        </Col>
      </Row>

      <Row className="justify-content-md-center text-black bg-light pt-5 pb-5">
        <Col xs={12} md={10}>
          <Row>{Section3LoQueHacemosList}</Row>
        </Col>
      </Row>

      <Row className="text-black bg-light justify-content-md-center pt-5">
        <Col md={4} xs={12}>
          <Col md={8} xs={12} className="pt-5">
            <h1 className="sec2-tit text-primary-buho text-left">
              {t("SomosBuho.section3.2.pregunta1")}
            </h1>
          </Col>
          <Col md={10} xs={12}>
            <p className="Section3Textos pb-5">
              {t("SomosBuho.section3.2.texto1")}
            </p>
          </Col>
        </Col>
        <Col md={6} xs={12}>
          <CardParallax1 />
        </Col>
      </Row>

      <Row className="text-black bg-light justify-content-md-center pt-5">
        <Col xs={12} md={6}>
          <CardParallax2 />
        </Col>
        <Col xs={12} md={4}>
          <Col xs={12} md={8} className="pt-5">
            <h1 className="sec2-tit text-primary-buho text-left">
              {t("SomosBuho.section3.2.pregunta2")}
            </h1>
          </Col>
          <Col xs={12} md={10}>
            <p className="Section3Textos">{t("SomosBuho.section3.2.texto2")}</p>
          </Col>
        </Col>
      </Row>
      <Carrusel backgroundPath="we-are-owl" />
      <Formulario sectionName="we-are-owl" />
    </section>
  );
};

export default SomosBuho;
