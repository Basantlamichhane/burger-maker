import React from "react";
import './Navigationitem.css';

const NavigationItem = (props) => (
    <li className="Navigationitem">
        <a href={props.link} className={props.active ? 'active': null} >{props.children}</a>
        </li>
);

export default NavigationItem;