import React from "react";
import "./Navigation-itms.css";
import NavigationItem from "./Navigationitem/Navigationitem";

const NavigationItems = () => (
  <ul className="Navigationitems">
    <NavigationItem link="#" active>
      Burger Maker
    </NavigationItem>
    <NavigationItem link="#">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
