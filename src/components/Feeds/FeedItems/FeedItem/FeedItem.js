import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCommentAlt, faShare, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
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
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className={classes.FeedItem__footer}>
            <div className={classes.FeedItem__footer__item}>
                <FontAwesomeIcon icon={faArrowUp} />
                <div className={classes.Text}>2 Upvotes</div>
            </div>
            <div className={classes.FeedItem__footer__item}>
                <FontAwesomeIcon icon={faCommentAlt} />
                <div className={classes.Text}>246</div>
            </div>
            <div className={classes.FeedItem__footer__item}>
                <FontAwesomeIcon icon={faShare} />
            </div>
            <div className={classes.FeedItem__footer__item}>
                <FontAwesomeIcon icon={faEye} />
                <div className={classes.Text}>246</div>
            </div>
            <div className={classes.FeedItem__footer__item}>
                <FontAwesomeIcon icon={faArrowDown} />
                <div className={classes.Text}>0 Downvotes</div>
            </div>
        </div>
    </div>;
}

export default feedItem;