import React from 'react';
import Header from '../header/header';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;