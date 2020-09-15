import React from "react";

import { useSpring, animated } from "react-spring";
import { Container, Image } from "react-bootstrap";

export default function ReusableComponentCardParalax({
  mainPicture,
  backgroundImage,
}) {
  const calculation = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const mainPictureTransformation = (x, y) =>
    `translate3d(${x / 20 + 200}px,${y / 10}px,0)`;
  const backgroundImageTransformation = (x, y) =>
    `translate3d(${x / 20}px,${y / 10 - 400}px,0)`;
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({ xy: calculation(x, y) })
      }
      className="container-responsive h-container"
    >
      <animated.div
      // style={{ transform: props.xy.interpolate(mainPictureTransformation) }}
      >
        <Image
          src={backgroundImage}
          className="img-responsive img-background"
        />
      </animated.div>

      <animated.div
      // style={{
      //   transform: props.xy.interpolate(backgroundImageTransformation),
      // }}
      >
        <Image src={mainPicture} className="img-responsive" />
      </animated.div>
    </Container>
  );
}
