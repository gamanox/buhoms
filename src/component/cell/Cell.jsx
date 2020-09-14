import React, { useState } from "react";
import { Icon } from "antd";
import { config } from "react-spring/renderprops";
import { Container, Row, Col } from "react-bootstrap";
import { Slug, Fade } from "../primitives/Primitives";
import { useSpring, useTrail, animated } from "react-spring";
import { useTranslation } from "react-i18next";
import ReusableComponent from "../pages/ReusableComponent/ReusableComponent";

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
  // Opera 8.0+
  var isOpera =
    (!!window.opr && !!window.opr.addons) ||
    !!window.opera ||
    navigator.userAgent.indexOf(" OPR/") >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== "undefined";

  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && window.safari.pushNotification)
    );

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 79
  var isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  // Edge (based on chromium) detection
  var isEdgeChromium = isChrome && navigator.userAgent.indexOf("Edg") !== -1;

  // Blink engine detection
  var isBlink = (isChrome || isOpera) && !!window.CSS;

  return (
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
              {/*Intro*/}
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

              {/*Gradiente adentro y afuera*/}
              <div
                className={`cell_bk_gradiente ${css_gra_hov} ${
                  active ? css_gra : ""
                }`}
              />

              {/*Afuera*/}
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

              {/*Adentro*/}

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
                      <h1 className="title">
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
};
export default Cell;
