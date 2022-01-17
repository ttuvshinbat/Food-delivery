import React from "react";
import PageInsideMenu from "./PageInsideMenu";
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
import Dummy from "./Dummy";
import MainDishMenu from "./MainDishMenu";
import Salad from "./Salad";
import Desserts from "./Desserts";
import Sales from "./Sales";

function Menu() {
  return (
    <div>
      <PageInsideMenu />
      <Switch>
        <Route exact path="/menu" component={MainDishMenu} />
        <Route path="/menu/salad" component={Salad} />
        <Route path="/menu/snack" component={Desserts} />
        <Route path="/menu/sale" component={Sales} />
      </Switch>
    </div>
  );
}

export default Menu;
