import React, { Component } from 'react';

import Aux from "../Auxiliary/Auxiliary";
import Feeds from "../../containers/Feeds/Feeds";
import Navigation from "../../components/Navigation/Navigation";
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return <Aux>
            <main className={classes.Layout}>
                <Feeds />
            </main>
            <Navigation /> 
        </Aux>
    }
}

export default Layout;