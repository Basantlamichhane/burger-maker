import React,{Component} from "react";
import PropTypes from "prop-types";

import './BurgerIngerdient.css';

class BurgerIngerdient extends Component {
    render(){
        let ingerdient;
    switch ( this.props.type) {
        case('bread-bottom'):
        ingerdient = <div className='BreadBottom'></div>;
        break;
        case('bread-top'):
        ingerdient = (
            <div className='BreadTop'>
                <div className='Seeds1'></div>
                <div className='Seeds2'></div>
            </div>
        );
        break;
        case('meat'):
        ingerdient = <div className='Meat'></div>;
        break;
        case('cheese'):
        ingerdient = <div className='cheese'></div>;
        break;
        case('bacon'):
        ingerdient = <div className='bacon'></div>;
        break;
        case('salad'):
        ingerdient = <div className='salad'></div>;
        break;
        default:
            ingerdient = null;
    }
    return ingerdient;
}
}
BurgerIngerdient.propTypes = {
    type:PropTypes.string.isRequired
};


export default BurgerIngerdient;              



