import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faListAlt, faPlus, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Navigation.module.css';

const navigation = () => {

    const navigationItems = [faHome, faListAlt, faPlus, faBell, faUserCircle];
    
    return <footer className={classes.Navigation}>
        <nav>
            <ul>
                {
                    navigationItems.map((item, index) => {
                        return <NavigationItem key={index} active={index === 1}>
                            <FontAwesomeIcon icon={item} />
                        </NavigationItem>;
                    })
                }
            </ul>
        </nav>
    </footer>
};

export default navigation;