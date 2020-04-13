import React, {Component} from 'react';
import classes from './FeedsHeader.module.css';

const feedsHeader = () => {
    return <div className={classes.FeedsHeader}>
        <div>Profile icon</div>
        <div>Search Box</div>
        <div>Search Icon</div> 
    </div>
};

export default feedsHeader;