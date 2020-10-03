import React, { useState } from "react";
import { Icon } from "antd";
import { config } from "react-spring/renderprops";
import { Container, Row, Col } from "react-bootstrap";
import { Slug, Fade } from "../primitives/Primitives";
import { useTrail, animated } from "react-spring";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ReusableComponent from "../pages/ReusableComponent/ReusableComponent";
import videoSectionDesign from "../../assets/video/DESIGN.mov";
import videoSectionPrint from "../../assets/video/PRINT.mp4";
import videoSectionLogistics from "../../assets/video/LOGISTICA.mp4";
import videoSectionPickandpack from "../../assets/video/PACKING1.mp4";
import videoSectionProducts from "../../assets/video/PACKING2.mp4";
import videoSectionWeAreOwl from "../../assets/video/videoSectionWeAreOwl.mp4";
import weareowlposter from "../../assets/Images/Buho_somos02.svg";
import designposter from "../../assets/Images/Buho_DesignBck.svg";
import printposter from "../../assets/Images/Buho_PrintBck.svg";
import logisticsposter from "../../assets/Images/Buho_LogisticsBck1.svg";
import pickpackposter from "../../assets/Images/Buho_PickBck.svg";
import productsposter from "../../assets/Images/Productos.svg";

const Cell = ({ id, width, toggle, css, active, css_gra, css_gra_hov }) => {
  console.log(active);
  const { t } = useTranslation();

  const [toggleX, setToggleX] = useState(false);

  const trail = useTrail(1, {
    config,
    x: toggleX ? 60 : 70,
  });
  const ActiveState = (
    <Fade show={active} delay={active ? 100 : 0}>
      <div>
        <Slug delay={100}>
          <div
            className="close"
            style={{
              cursor: "pointer",
            }}
          >
            <Icon type="close" onClick={toggle} className="hidden-icon" />
          </div>
          <div className="content_top_section transform-objects">
            <h1
              className="title"
              style={{
                width: "150%",
                transform: "translate(-15%,0)",
              }}
            >
              {id !== 0 ? t(`home.landing.${id}.titulo`) : ""}
            </h1>
            <p className="parrafo">
              {id !== 0 ? t(`home.landing.${id}.parrafo`) : ""}
            </p>
          </div>
        </Slug>
        <Container fluid className="w-100 h-100 m-0 p-0">
          <Row
            className="w-100 h-100 m-0 p-0"
            style={{ zIndex: active ? 1000 : -1 }}
          >
            <Col id="header" className="video w-100 h-100 m-0 p-0 ">
              <video
                id="background-video"
                loop
                autoPlay
                poster={
                  {
                    0: weareowlposter,
                    1: designposter,
                    2: printposter,
                    3: logisticsposter,
                    4: pickpackposter,
                    5: productsposter,
                  }[id]
                }
              >
                <source
                  src={
                    {
                      0: videoSectionWeAreOwl,
                      1: videoSectionDesign,
                      2: videoSectionPrint,
                      3: videoSectionLogistics,
                      4: videoSectionPickandpack,
                      5: videoSectionProducts,
                    }[id]
                  }
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="text-video centered text-light text-center d-sm-none d-md-block">
                Explore
                <br />
                <FontAwesomeIcon icon={faArrowDown} size="2x" />
              </p>
            </Col>
          </Row>
          {
            {
              0: <ReusableComponent nameSection="we-are-owl" />,
              1: <ReusableComponent nameSection="design" />,
              2: <ReusableComponent nameSection="print" />,
              3: <ReusableComponent nameSection="logistics" />,
              4: <ReusableComponent nameSection="pickandpack" />,
              5: <ReusableComponent nameSection="products" />,
            }[id]
          }
        </Container>
      </div>
    </Fade>
  );
  const InActiveState = (
    <Fade
      show={!active}
      from={{ opacity: 0, transform: "translate3d(0,140px,0)" }}
      enter={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
      leave={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
      delay={active ? 0 : 100}
    >
      <Container fluid className="">
        <Row className="">
          <Col className="video">
            {id === 0 ? (
              <video loop autoPlay className="video-cover">
                <source
                  src={videoSectionWeAreOwl}
                  poster={weareowlposter}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row className="w-100 h-100 m-0 p-0">
          <Col className="w-100 h-100 m-0 p-0">
            <div
              className="h-100"
              style={{
                overflow: "hidden",
              }}
            >
              {trail.map(({ x, height, ...rest }, index) => (
                <animated.h1
                  key={index}
                  className="titulo-afuera h-100"
                  style={{
                    ...rest,
                    transform: x.interpolate((x) => `translate3d(0,${x}%,0)`),
                    height,
                    display: !active ? "block" : "none",
                    color: "#FFFFFF",
                    pointerEvents: "none",
                    paddingLeft: "2rem",
                    zIndex: 1000,
                  }}
                >
                  {id !== 0 ? t(`home.landing.${id}.titulo_afuera`) : ""}
                </animated.h1>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
  return (
    <div
      className="h-100 w-100 m-0 p-0 bg-dark"
      style={{
        overflow: active ? "scroll" : "hidden",
        overflowX: active ? "scroll" : "hidden",
      }}
    >
      <div
        key={id}
        className={`cell ${css}`}
        style={{
          cursor: !active ? "pointer" : "auto",
          zIndex: active ? 1000 : 1,
        }}
        onClick={!active ? toggle : undefined}
        onMouseEnter={() => (!active ? setToggleX(true) : undefined)}
        onMouseLeave={() => (!active ? setToggleX(false) : undefined)}
      >
        {InActiveState}
        <div
          className={`cell_bk_gradiente ${css_gra_hov} ${
            active ? css_gra : ""
          }`}
        />
        {ActiveState}
      </div>
    </div>
  );
};
export default Cell;
