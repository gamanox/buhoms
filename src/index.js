import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.sass";
import "./shared/i18n";
import LandingPage from "./component/landingPage/LandingPage";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<LandingPage />, document.getElementById("root"));

serviceWorker.unregister();
