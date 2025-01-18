import React from "react";
import Aux from "../../../hoc/Aux1";
import Button from "../../UI/Button/Button";
const ordersummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKeys => {
        return (<li key={igKeys}>
            <span style={{textTransform:'capitalize'}}>{igKeys}</span>: {props.ingredients[igKeys]}
            </li>);
    }); 
    
     return(
        <Aux>
            <h3> Your Order</h3>
            <p>A delicious burger with a variety of toppings</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: Rs.{props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
            
     );

};


export default ordersummary;