import React from 'react';
import FeedItem from './FeedItem/FeedItem';
import classes from './FeedItems.module.css';

const feedItems = () => {
    return <div className={classes.FeedItems}>
        {
            [...Array(10)].map(el => {
                return <FeedItem key={el} />;
            })
        }
    </div>
}

export default feedItems;