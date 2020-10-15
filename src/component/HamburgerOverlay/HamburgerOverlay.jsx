import React, { Component } from "react";
import "./HamburgerOverlay.sass";

class HamburgerOverlay extends Component {
  constructor() {}
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
        </ul>
      </div>
    );
  }
}

export default HamburgerOverlay;
