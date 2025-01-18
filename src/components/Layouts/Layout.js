import React from 'react';
import Aux from '../../hoc/Aux1';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/SideDrawer/Sidedrawer';

const Layout = (props) => (
    < Aux >     
        <Toolbar></Toolbar>
        <Sidedrawer/>
        <div> SIDE DRAWER, BACKDROP

        </div>
        <main className='content '>
            {props.children}
        </main>
    </Aux>
);

export default Layout; 