import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/Navigation-items';
import './Sidedrawer.css';

const sideDrawer = (props) => {
 
    return(
        <div className="Sidedrawer">
            <Logo />
           <nav>
                < NavigationItems/>           
            </nav> 
        </div>
    );
}

export default sideDrawer;