import React, { useState, useEffect, useCallback } from "react";
import Navigation from "../navigation/Navigation";
import $ from "jquery";
import data from "../../shared/config_grid";
import "antd/dist/antd.css";
import Cell from "../cell/Cell";
import { config } from "react-spring/renderprops";
import Grid from "../grid/Grid";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [size, setSize] = useState([769, 0]);
  const [tappedRight, setTappedRight] = useState(false);
  const [tappedLeft, setTappedLeft] = useState(false);
  useEffect(() => {
    $(`#left-button`).hide();
    return () => {};
  }, []);
  useEffect(() => {
    $(`.grid`).on("click", (event) => {
      $(`#left-button`).hide();
      $(`#right-button`).hide();
    });
    return () => {};
  }, []);
  const scroll = () => {
    $(`.grid`).scroll(() => {
      $(`#left-button`).show();
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {};
  }, []);

  const handleClickRight = () => {
    setTappedRight(true);
    if (tappedRight) {
      $(`#right-button`).hide();
      $(`.cell_bk6_gradiente`)[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTappedLeft(true);
    } else {
      $(`.cell_bk5_gradiente`)[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTappedLeft(false);
      $(`#left-button`).show();
    }
  };
  const handleClickLeft = () => {
    $(`#right-button`).show();
    if (tappedLeft) {
      $(`.cell_bk3_gradiente`)[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTappedLeft(false);
    } else {
      $(`.cell_bk1_gradiente`)[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      $(`#left-button`).hide();
      setTappedRight(false);
    }
  };
  function updateSize() {
    setSize([window.innerWidth, window.innerHeight]);
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const callback = useCallback(() => {
    $("i.anticon").click();
    if (window.innerWidth >= 689) {
      $(`#right-button`).show();
      $(`#left-button`).show();
    } else {
      $(`#right-button`).hide();
      $(`#left-button`).hide();
    }
  }, []);

  return (
    <Router>
      <div>
        <Navigation callback={callback} />
        <Switch>
          <Route exact path="/">
            <Grid
              className="grid"
              // Arbitrary data, should contain keys, possibly heights, etc.
              data={data}
              // Key accessor, instructs grid on how to fet individual keys from the data set
              keys={(d) => d.id}
              // Can be a fixed value or an individual data accessor
              widths={(d) => {
                var width = window.innerWidth / 3;
                var thirdScreen = width * 2;
                if (0 >= d.id) {
                  return thirdScreen;
                } else {
                  return width;
                }
              }}
              // Can be a fixed value or an individual data accessor
              heights={window.innerHeight}
              // Number of columns
              columns={size[0] > 768 ? 6 : 1}
              // Space between elements
              margin={0}
              // Removes the possibility to scroll away from a maximized element
              lockScroll={true}
              // Delay when active elements (blown up) are minimized again
              closeDelay={0}
              // Regular react-spring configs
              config={config}
            >
              {(data, active, toggle) => {
                return (
                  <Cell
                    {...data}
                    active={active}
                    toggle={toggle}
                    key={(d) => {
                      console.log(d.id);
                      return d.id;
                    }}
                  />
                );
              }}
            </Grid>
            <div id="right-button">
              <Fab
                event="click"
                position={{ bottom: 0, right: 120 }}
                mainButtonStyles={{
                  backgroundColor: "#000000",
                  width: 56,
                  borderRadius: 56,
                }}
                onClick={handleClickRight}
                icon="→"
              />
            </div>
            <div id="left-button">
              <Fab
                event="click"
                position={{ bottom: 0, left: 120 }}
                mainButtonStyles={{
                  backgroundColor: "#000000",
                  width: 56,
                  borderRadius: 56,
                }}
                onClick={handleClickLeft}
                icon="←"
              />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
