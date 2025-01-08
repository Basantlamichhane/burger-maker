import React from "react";

import  './Burger.css';
import BurgerIngerdient from "./BurgerIngredient/Burgerin";
const Burger = (props) => {
    return (
        <div className="Burger">
            <BurgerIngerdient type="bread-top" />
            <BurgerIngerdient type="cheese"/>
            <BurgerIngerdient types="meat"/>
           
            <BurgerIngerdient type="bacon"/>
            <BurgerIngerdient type="bread-bottom" />
            </div>
        );
}
export default Burger;