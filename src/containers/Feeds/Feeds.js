import React, { Component } from 'react';
import FeedsHeader from '../../components/Feeds/FeedsHeader/FeedsHeader';
import FeedItems from '../../components/Feeds/FeedItems/FeedItems';
import classes from './Feeds.module.css';

class Feeds extends Component {
    render() {
        return <div className={classes.Feeds}>
            <FeedsHeader />
            <FeedItems />
        </div>
    }
}

export default Feeds;