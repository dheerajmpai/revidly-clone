import React from 'react';
import ProfilePicture from '../../../ProfilePicture/ProfilePicture';
import classes from './FeedItem.module.css';

const feedItem = () => {
    return <div className={classes.FeedItem}>
        <div className={classes.FeedItem__header}>
            <div className={classes.FeedItem__header__info}>
                <ProfilePicture />
                <div className={classes.Info}>
                    <div className={classes['Info--bold']}>Revidly Internships</div>
                    <div>Smriti Ghoshal</div>
                </div>
            </div>
            <div className={classes.Time}>Yesterday at 9:32 PM</div>
        </div>
        <div className={classes.FeedItem__content}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
        <div className={classes.FeedItem__footer}>I am footer</div>
    </div>;
}

export default feedItem;