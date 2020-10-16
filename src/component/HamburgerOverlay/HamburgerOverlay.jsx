import React, { Component } from "react";
import $ from "jquery";

import "./HamburgerOverlay.sass";

class HamburgerOverlay extends Component {
 

  render() {
    return (
      <div className="hamburgeroverlay">
        <ul>
          <li
            onClick={() => {
              $(`.cell_bk2`).trigger(`click`);
              $(`.hambu`).trigger(`click`);

            }}
          >
            <p>Diseño</p>
          </li>
          <li
          onClick={() => {
            $(`.cell_bk3`).trigger(`click`);
            $(`.hambu`).trigger(`click`);

          }}
          >
            <p>Impresión</p>
          </li>
          <li
          onClick={() => {
            $(`.cell_bk4`).trigger(`click`);
            $(`.hambu`).trigger(`click`);

          }}
          >
            <p>Logística</p>
          </li>
          <li
          onClick={() => {
            $(`.cell_bk5`).trigger(`click`);
            $(`.hambu`).trigger(`click`);

          }}
          >
            <p>Pick & Pack</p>
          </li>
          <li
          onClick={() => {
            $(`.cell_bk6`).trigger(`click`);
            $(`.hambu`).trigger(`click`);

          }}
          >
            <p>Productos</p>
          </li>
          <li
          onClick={() => {
            $(`.cell_bk1`).trigger(`click`);
            $(`.hambu`).trigger(`click`);

          }}
          >
            <p>Somos Búho</p>
          </li>
          <li className="contact-btn">
            <p>Contáctanos</p>
          </li>
          <li className="lang-btn lang-es active">
            <p>ES</p>
          </li>
          <li className="lang-btn lang-en">
            <p>EN</p>
          </li>
        </ul>
        
      </div>
    );
  }
}

export default HamburgerOverlay;