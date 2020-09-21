import React, { useState } from "react";
import { Icon } from "antd";
import { config } from "react-spring/renderprops";
import { Container, Row, Col } from "react-bootstrap";
import { Slug, Fade } from "../primitives/Primitives";
import { useSpring, useTrail, animated } from "react-spring";
import { useTranslation } from "react-i18next";
import ReusableComponent from "../pages/ReusableComponent/ReusableComponent";
import videoSectionDesign from "../../assets/video/DESIGN.mov";
import videoSectionPrint from "../../assets/video/PRINT.mp4";
import videoSectionLogistics from "../../assets/video/LOGISTICA.mp4";
import videoSectionPickandpack from "../../assets/video/PACKING1.mp4";
import videoSectionProducts from "../../assets/video/PACKING2.mp4";
import videoSectionWeAreOwl from "../../assets/video/videoSectionWeAreOwl.mp4";
import poster from "../../assets/Images/WeAreOwl/imageHeader.png";

const Cell = ({ id, width, toggle, css, active, css_gra, css_gra_hov }) => {
  const { t } = useTranslation();
  const propsA = useSpring({
    config: config.slow,
    from: { transform: "translate3d(0px,0,0)", opacity: 1 },
    to: [
      { transform: `translate3d('${width}px',0,0)` },
      { opacity: 0, display: "none" },
    ],
    onRest: () => {},
  });

  const [toggleX, setToggleX] = useState(false);

  const trail = useTrail(1, {
    config,
    x: toggleX ? 60 : 70,
  });

  var isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && window.safari.pushNotification)
    );

  const RenderCellComponent = (
    <div
      className="h-100 m-0 p-0"
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
        <Container fluid className="h-100 m-0 p-0">
          <Row className="h-100 m-0 p-0">
            <Col className="h-100 m-0 p-0">
              {!active ? (
                <animated.div
                  style={{
                    width,
                    height: window.innerHeight,
                    position: "absolute",
                    backgroundColor: "#000000",
                    zIndex: 1,
                    ...propsA,
                  }}
                />
              ) : null}

              <div
                className={`cell_bk_gradiente ${css_gra_hov} ${
                  active ? css_gra : ""
                }`}
              />

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
                    }}
                  >
                    {t(`home.landing.${id}.titulo_afuera`)}
                  </animated.h1>
                ))}
              </div>

              <Fade show={active} delay={active ? 300 : 0}>
                <div className="details">
                  <Slug delay={400}>
                    <div
                      className="close"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <Icon
                        type="close"
                        onClick={toggle}
                        className="hidden-icon"
                      />
                    </div>
                    <Col
                      className={`content_top_section ${
                        isSafari ? "transform-objects" : ""
                      }`}
                    >
                      <h1
                        className="title"
                        style={{
                          width: "150%",
                          transform: "translate(-15%,0)",
                        }}
                      >
                        {t(`home.landing.${id}.titulo`)}
                      </h1>
                      <p className="parrafo">
                        {t(`home.landing.${id}.parrafo`)}
                      </p>
                    </Col>
                  </Slug>
                </div>
              </Fade>
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
  // eslint-disable-next-line
  const RenderCellComponentWithVideo = (
    <Container
      className="h-100 viewport-header"
      style={{
        overflow: active ? "scroll" : "hidden",
        overflowX: active ? "scroll" : "hidden",
      }}
    >
      <Row
        key={id}
        className={`cell`}
        style={{
          cursor: !active ? "pointer" : "auto",
          zIndex: active ? 1000 : 1,
        }}
        onClick={!active ? toggle : undefined}
        onMouseEnter={() => (!active ? setToggleX(true) : undefined)}
        onMouseLeave={() => (!active ? setToggleX(false) : undefined)}
      >
        <Col>
          <Row className="">
            <Container className="h-100 m-0 p-0">
              <Row>
                <Col>
                  <video id="background-video" loop autoPlay poster={poster}>
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
                </Col>
              </Row>
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
  return RenderCellComponent;
};
export default Cell;
