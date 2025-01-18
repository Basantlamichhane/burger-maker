import React from "react";
import './Burger.css';
import BurgerIngerdient from "./BurgerIngredient/Burgerin";

const Burger = (props) => {
     let transformedIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array( props.ingredients[igKey] )].map((_, i) => (
                <BurgerIngerdient key={igKey + i} type={igKey} />
                
            ));
        })
       .reduce((arr, el)=> {
            return arr.concat(el)
        },[]);
     
       if (transformedIngredient.length === 0){
        transformedIngredient = <p> Please start adding ingredients!</p>;

       }
       console.log(props.ingredients)
    return (
        <div className="Burger">
            <BurgerIngerdient type="bread-top" />
            {transformedIngredient}
            <BurgerIngerdient type="bread-bottom" />
            <div>
                
            </div>
        </div>
       
    );
}

export default Burger;