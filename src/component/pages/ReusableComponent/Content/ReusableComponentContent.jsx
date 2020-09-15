import React from "react";
import { Row, Col } from "react-bootstrap";
import ReusableComponentCardParalax from "./ReusableComponentCardParalax";
import circle from "../../../../assets/img/pages/somos_buho/VectorCirculo.svg";
import ImageWeAreOwlComponentOne from "../../../../assets/Images/WeAreOwl/imageContentOne.png";
import ImageWeAreOwlComponentTwo from "../../../../assets/Images/WeAreOwl/imageContentTwo.png";

import ImageDesignContentOne from "../../../../assets/Images/Design/imageDesignContentOne.png";
import ImageDesignContentTwo from "../../../../assets/Images/Design/imageDesignContentTwo.png";
import ImageDesignContentThree from "../../../../assets/Images/Design/imageDesignContentThree.png";

import ImagePrintContentOne from "../../../../assets/Images/Print/imagePrintContentOne.png";
import ImagePrintContentTwo from "../../../../assets/Images/Print/imagePrintContentTwo.png";
import ImagePrintContentThree from "../../../../assets/Images/Print/imagePrintContentThree.png";
import ImagePrintContentFour from "../../../../assets/Images/Print/imagePrintContentFour.png";
import ImagePrintContentFive from "../../../../assets/Images/Print/imagePrintContentFive.png";

import ImageLogisticsContentOne from "../../../../assets/Images/Logistics/imageLogisticsContentOne.png";
import ImageLogisticsContentTwo from "../../../../assets/Images/Logistics/imageLogisticsContentTwo.png";
import ImageLogisticsContentThree from "../../../../assets/Images/Logistics/imageLogisticsContentThree.png";

import ImagePickAndPackContentOne from "../../../../assets/Images/PickAndPack/imagePickAndPackContentOne.png";
import ImagePickAndPackContentTwo from "../../../../assets/Images/PickAndPack/imagePickAndPackContentTwo.png";
import ImagePickAndPackContentThree from "../../../../assets/Images/PickAndPack/imagePickAndPackContentThree.png";
import ImagePickAndPackContentFour from "../../../../assets/Images/PickAndPack/imagePickAndPackContentFour.png";
import ImagePickAndPackContentFive from "../../../../assets/Images/PickAndPack/imagePickAndPackContentFive.png";
import ImagePickAndPackContentSix from "../../../../assets/Images/PickAndPack/imagePickAndPackContentSix.png";
import ImagePickAndPackContentSeven from "../../../../assets/Images/PickAndPack/imagePickAndPackContentSeven.png";
import ImagePickAndPackContentEight from "../../../../assets/Images/PickAndPack/imagePickAndPackContentEight.png";

import ImageProductContentOne from "../../../../assets/Images/Product/imageProductContentOne.png";

import i18n from "../../../../shared/i18n";

export default function ReusableComponentContent({ nameSection }) {
  const owlImages = [ImageWeAreOwlComponentOne, ImageWeAreOwlComponentTwo];
  const designImages = [
    ImageDesignContentOne,
    ImageDesignContentTwo,
    ImageDesignContentThree,
  ];
  const printImages = [
    ImagePrintContentOne,
    ImagePrintContentTwo,
    ImagePrintContentThree,
    ImagePrintContentFour,
    ImagePrintContentFive,
  ];
  const logisticsImages = [
    ImageLogisticsContentOne,
    ImageLogisticsContentTwo,
    ImageLogisticsContentThree,
  ];
  const pickAndPackImages = [
    ImagePickAndPackContentOne,
    ImagePickAndPackContentTwo,
    ImagePickAndPackContentThree,
    ImagePickAndPackContentFour,
    ImagePickAndPackContentFive,
    ImagePickAndPackContentSix,
    ImagePickAndPackContentSeven,
    ImagePickAndPackContentEight,
  ];
  const owl = i18n
    .t("we-are-owl.content", { returnObjects: true })
    .map((item, id) => (
      <Row className="bg-light justify-content-center" key={id}>
        <Col md={{ span: 10, offset: 1 }} sm={12}>
          <Row>
            <Col
              md={4}
              sm={12}
              className={`pt-5 ${id % 2 ? `order-last` : ``}`}
            >
              <h1 className={`${nameSection} title-section-two`}>
                {item.title}
              </h1>
              <p className="description-section-two">{item.description}</p>
            </Col>
            <Col md={8} sm={12}>
              <ReusableComponentCardParalax
                mainPicture={owlImages[id]}
                backgroundImage={circle}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    ));
  const design = i18n
    .t("design.content", { returnObjects: true })
    .map((item, id) => (
      <Row className="bg-light justify-content-md-center" key={id}>
        <Col md={{ span: 10, offset: 1 }} sm={12}>
          <Row>
            <Col
              md={4}
              sm={12}
              className={`center-objects ${id % 2 ? `order-last` : ``}`}
            >
              <h1 className={`${nameSection} title-section-two`}>
                {item.title}
              </h1>
              <p className="description-section-two text-break">
                {item.description}
              </p>
            </Col>
            <Col md={8} sm={12} className="center-objects">
              <ReusableComponentCardParalax
                mainPicture={designImages[id]}
                backgroundImage={circle}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    ));
  const print = i18n
    .t("print.content", { returnObjects: true })
    .map((item, id) => (
      <Row className="bg-light justify-content-md-center" key={id}>
        <Col md={{ span: 10, offset: 1 }} sm={12}>
          <Row>
            <Col
              md={4}
              sm={12}
              className={`center-objects ${id % 2 ? `order-last` : ``}`}
            >
              <h1 className={`${nameSection} title-section-two`}>
                {item.title}
              </h1>
              <p className="description-section-two text-break">
                {item.description}
              </p>
            </Col>
            <Col md={8} sm={12} className="center-objects">
              <ReusableComponentCardParalax
                mainPicture={printImages[id]}
                backgroundImage={circle}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    ));
  const logistics = i18n
    .t("logistics.content", { returnObjects: true })
    .map((item, id) => (
      <Row className="bg-light justify-content-md-center" key={id}>
        <Col md={{ span: 10, offset: 1 }} sm={12}>
          <Row>
            <Col
              md={4}
              sm={12}
              className={`center-objects ${id % 2 ? `order-last` : ``}`}
            >
              <h1 className={`${nameSection} title-section-two`}>
                {item.title}
              </h1>
              <p className="description-section-two text-break">
                {item.description}
              </p>
            </Col>
            <Col md={8} sm={12} className="center-objects">
              <ReusableComponentCardParalax
                mainPicture={logisticsImages[id]}
                backgroundImage={circle}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    ));
  const pickAndPack = i18n
    .t("pickandpack.content", { returnObjects: true })
    .map((item, id) => (
      <Row className="bg-light justify-content-md-center" key={id}>
        <Col md={{ span: 10, offset: 1 }} sm={12}>
          <Row>
            <Col
              md={4}
              sm={12}
              className={`center-objects ${id % 2 ? `order-last` : ``}`}
            >
              <h1 className={`${nameSection} title-section-two`}>
                {item.title}
              </h1>
              <p className="description-section-two text-break">
                {item.description}
              </p>
            </Col>
            <Col md={8} sm={12} className="center-objects">
              <ReusableComponentCardParalax
                mainPicture={pickAndPackImages[id]}
                backgroundImage={circle}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    ));
  const product = i18n
    .t("products.content", { returnObjects: true })
    .map((item, id) => (
      <Row className="bg-light justify-content-md-center" key={id}>
        <Col md={{ span: 10, offset: 1 }} sm={12}>
          <Row>
            <Col
              sm={12}
              md={4}
              className={`center-objects ${id % 2 ? `order-last` : ``}`}
            >
              <h1 className={`${nameSection} title-section-two`}>
                {item.title}
              </h1>
              <p className="description-section-two text-break">
                {item.description}
              </p>
            </Col>
            <Col sm={12} md={8} className="center-objects">
              <ReusableComponentCardParalax
                mainPicture={ImageProductContentOne}
                backgroundImage={circle}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    ));
  return (
    <div className="px-5 bg-light">
      {
        {
          "we-are-owl": owl,
          design: design,
          print: print,
          logistics: logistics,
          pickandpack: pickAndPack,
          product: product,
        }[nameSection]
      }
    </div>
  );
}
