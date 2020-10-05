import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";

export const IconFabComponent = ({ position }) => {
  return (
    <Button className="bg-transparent btn-hover" style={{ border: 0 }}>
      {
        {
          right: <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" />,
          left: <FontAwesomeIcon icon={faLongArrowAltLeft} size="lg" />,
        }[position]
      }
    </Button>
  );
};
