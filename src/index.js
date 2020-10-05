import React from "react";
import ReactDOM from "react-dom";
// Components
import LandingPage from "./component/landingPage/LandingPage";
// ServiceWorker
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "aos/dist/aos.css";
import "./sass/style.sass";
import "./shared/i18n";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faLongArrowAltRight, faLongArrowAltLeft);

ReactDOM.render(<LandingPage />, document.getElementById("root"));

serviceWorker.unregister();
