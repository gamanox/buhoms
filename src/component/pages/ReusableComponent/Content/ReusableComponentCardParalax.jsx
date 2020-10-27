import React from "react";
import { useSpring, animated, config } from "react-spring";
import { Container, Image } from "react-bootstrap";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { ImageBackgroundComponent } from "../../../ImageBackgroundComponent/ImageBackgroundComponent";
function gradientColor(sectionName) {
  switch (sectionName) {
    case "we-are-owl":
      return ["#00FF00", "#bdcecb"];
    case "design":
      return ["#00ffea", "#2B31FF"];
    case "print":
      return ["#FF0054", "#4200FF"];
    case "logistics":
      return ["#FFF000", "#FF2E00"];
    case "pickandpack":
      return ["#A31BFF", "#2B31FF"];
    case "products":
      return ["#0047FF", "#00FF47"];

    default:
      return ["#00FF00", "#bdcecb"];
  }
}
export default function ReusableComponentCardParalax({
  mainPicture,
  sectionName,
}) {
  var gradients = gradientColor(sectionName);
  const calculation = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];

  // eslint-disable-next-line
  const mainPictureTransformation = (x, y) =>
    `translate3d(${x / 20 + 200}px,${y / 10}px,0)`;
  // eslint-disable-next-line
  const backgroundImageTransformation = (x, y) =>
    `translate3d(${x / 20}px,${y / 10 - 400}px,0)`;
  // eslint-disable-next-line
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: config.slow,
  }));

  return (
    <Parallax ref={(ref) => (React.useRef.parallax = ref)} pages={3}>
      <Container
        onMouseMove={({ clientX: x, clientY: y }) =>
          set({ xy: calculation(x, y) })
        }
        className="container-responsive h-container"
      >
        <animated.div
          style={{ transform: props.xy.interpolate(mainPictureTransformation) }}
        >
          <ImageBackgroundComponent
            gradientTop={gradients[0]}
            gradientBottom={gradients[1]}
          />
        </animated.div>

        <animated.div
          style={{
            transform: props.xy.interpolate(backgroundImageTransformation),
          }}
        >
          {/* <Image src={mainPicture} className="img-fluid " /> */}
          <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <Image src={mainPicture} className="img-fluid " />
          </ParallaxLayer>
        </animated.div>
      </Container>
    </Parallax>
  );
}
