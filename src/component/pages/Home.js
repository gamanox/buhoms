import React, { Component, useState } from "react";
//import logo from './logo.svg';
import {
  withTranslation,
  useTranslation,
  translate,
  Trans,
} from "react-i18next";
import i18n from "../../shared/i18n";
import { Controller, Scene } from "react-scrollmagic";
import { Container, Col, Jumbotron, Sec } from "react-bootstrap";

//import ItemHomeNavigation from '../components/ItemHomeNavigation';
//console.log(home)
class Home extends Component {
  constructor() {
    super();
    var myStyleClass = "scene_solutions";

    //document.getElementById('w-m-c').className(myStyleClass)
    this.changeBackground = this.changeBackground.bind(this);
  }
  changeBackground(x) {
    console.log("x: " + x);
    document
      .getElementById("background-container")
      .classList.remove(this.myStyleClass);
    document.getElementById("background-container").classList.add(x);
    this.myStyleClass = x;
  }

  render() {
    {
      /*i18n.t('home', { returnObjects: true }).map((value, i) => {
      console.log("value: " + value.titulo + " " + i);
      });
    
    
    style={{backgroundImage: "url(/static/media/scene_solutions.435612a0.png)"}}
    
    onMouseLeave={changeBackground2}
    */
    }

    const homeNavigation = i18n
      .t("home.navigation", { returnObjects: true })
      .map((item, i) => {
        if (0 == i) {
          return (
            <Scene duration={600} key={i}>
              <Col
                xs={12}
                md={9}
                className="h-100 my-auto ejemplo0"
                id={"trigger-" + i.toString()}
                onMouseOver={() => this.changeBackground(item.bk_img)}
              >
                <Jumbotron className="d-flex h-100 align-items-center p-0 background_transparent align-middle">
                  <Container>
                    <h1>
                      {item.titulo} {i}
                    </h1>
                  </Container>
                </Jumbotron>
              </Col>
            </Scene>
          );
        } else {
          return (
            <Scene duration={600} key={i}>
              {/*<Col lg="7" className="mw-100 d-inline-block">
         Home
  </Col>*/}
              <Col
                xs={12}
                md={7}
                className="h-100 mh-100 ejemplo"
                id={"trigger-" + i.toString()}
                onMouseOver={() => this.changeBackground(item.bk_img)}
              >
                <Jumbotron className="h-100 mh-100 mb-0 d-flex align-items-end m-0 p-0 background_transparent">
                  <Container className="">
                    <h1>{item.titulo}</h1>
                    <h2>{item.subtitulo}</h2>
                    <p>{item.texto}</p>
                    <h4>{item.textoBtn}</h4>
                  </Container>
                </Jumbotron>
              </Col>
            </Scene>
          );
        }
      });

    return (
      <div id="container-home" className="h-100 mh-100">
        <div
          id="background-container"
          className="w-100 mw-100 h-100 mh-100 position-fixed scene_solutions"
        ></div>
        <div
          id="seccions-container"
          className="d-flex flex-wrap flex-md-nowrap h-100 mh-100"
        >
          <Controller vertical={false}>{homeNavigation}</Controller>
        </div>
      </div>
    );
  }
}
export default withTranslation()(Home);
