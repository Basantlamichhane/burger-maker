import React from 'react';
import Aux from '../../hoc/Aux1';

const Layout = (props) => (
    < Aux > 
        <div></div>
        <main className='content '>
            {props.children}
        </main>
    </Aux>
);

export default Layout;