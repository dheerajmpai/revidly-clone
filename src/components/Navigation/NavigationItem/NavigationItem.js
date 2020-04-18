import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = props => {
    const classList = [classes.NavigationItem];
    if(props.active) {
        classList.push(classes['NavigationItem--active']);
    }
    return <li className={classList.join(' ')}>
        { props.children }
    </li>
};

export default navigationItem