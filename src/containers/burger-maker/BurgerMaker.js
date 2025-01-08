import { Component } from "react";
import Aux from './../../hoc/Aux1';
import Burger from './../../components/Burger/Burger';

class Burgermaker extends Component{
    render(){
        return(
            <Aux>
            <Burger/>
            
            </Aux>
        )
    }
}
export default Burgermaker;