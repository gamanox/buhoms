import React, { Component } from "react";
import "./HamburgerOverlay.sass";

class HamburgerOverlay extends Component {
  render() {
    return (
      <div className="hamburgeroverlay">
        <ul>
          <li>
            <p>Diseño</p>
          </li>
          <li>
            <p>Impresión</p>
          </li>
          <li>
            <p>Logística</p>
          </li>
          <li>
            <p>Pick & Pack</p>
          </li>
          <li>
            <p>Productos</p>
          </li>
          <li>
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
