import React from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import "../css/pageInsideMenu.css";
import "../components/Dummy";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PageInsideMenu = () => {
  return (
    <Container>
      <div className="slidingButtons" id="slidingButtons">
        <NavLink
          className="button"
          exact
          to="/menu"
          activeClassName="active-menu-button"
        >
          Үндсэн хоол
        </NavLink>
        <NavLink
          className="button"
          to="/menu/salad"
          activeClassName="active-menu-button"
        >
          Салад ба зууш
        </NavLink>
        <NavLink
          className="button"
          to="/menu/snack"
          activeClassName="active-menu-button"
        >
          Амттан
        </NavLink>
        <NavLink
          className="button"
          to="/menu/sale"
          activeClassName="active-menu-button"
        >
          Хямдралтай
        </NavLink>
      </div>
    </Container>
  );
};

export default PageInsideMenu;
