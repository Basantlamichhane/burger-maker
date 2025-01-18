import { Component } from "react";
import Aux from './../../hoc/Aux1';
import Burger from './../../components/Burger/Burger';
import Buildcontrols from './../../components/Burger/Buildcontrols/Buildcontrols';
import Modal from './../../components/UI/Modal/Modal';
import Ordersummary from './../../components/Burger/Ordersummary/Ordersummary';
const PRICES ={
    salad: 100,
    cheese: 50.1,
    meat: 110.8,
    bacon: 90.1
};
class Burgermaker extends Component{
   state={
    ingredient:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice:400,
    purchasable: false,
    purchasing: false
   }

   updatePurchaseState (ingredients){
    const sum = Object.keys(ingredients)
    .map(igKey => {
        return ingredients[igKey];
    })
    .reduce((sum,el) => {
        return sum + el;

    },0);
    this.setState({purchasable:sum > 0});
   }
   addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount+1;
        const updatedIngredient = {...this.state.ingredient};
        updatedIngredient[type] = updatedCount;
        this.setState({ingredient:updatedIngredient});
        const priceAddition = PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredient: updatedIngredient});
        this.updatePurchaseState(updatedIngredient);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if (oldCount <= 0) {
            return}
        const updatedCount = oldCount-1;
        const updatedIngredient = {...this.state.ingredient};
        updatedIngredient[type] = updatedCount;
        this.setState({ingredient:updatedIngredient});
        const priceDeduction = PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredient: updatedIngredient});
        this.updatePurchaseState(updatedIngredient);
    }

    purchaseHandler =()=>{
        this.setState({purchasing:true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = () => {
        alert('You continue!');
    }


    render(){
        const disabledInfo = {
            ...this.state.ingredient
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <Ordersummary 

                    ingredients={this.state.ingredient}
                    price={this.state.totalPrice.toFixed(2)}
                    purchaseCanceled= {this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
            <Burger ingredients={this.state.ingredient} />
                <Buildcontrols
                    ingredientAdded = { this.addIngredientHandler }
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>
            </Aux>
        )
    }
}
export default Burgermaker;