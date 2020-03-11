import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <div>
    <ul className={classes.NavigationItems}>
      <NavigationItem exact link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  </div>
);

export default navigationItems;
