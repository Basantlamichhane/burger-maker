import React from "react";
import burgerLogo from '../../Assets/Images/Burger-logo.png';
import './Logo.css';

const logo = (props) =>(
     <div className="logo">
        <img src={burgerLogo} alt="Logo"/>
     </div>
);

export default logo; 