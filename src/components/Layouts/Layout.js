import React from 'react';
import Aux from '../../hoc/Aux1';

const Layout = (props) => (
    < Aux > 
        <div>
            ToolBar, SideDrawer, Backdrop</div>
        <main >
            {props.children}
        </main>
    </Aux>
);

export default Layout;