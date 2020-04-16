import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ProfilePicture from '../../ProfilePicture/ProfilePicture';
import classes from './FeedsHeader.module.css';

const feedsHeader = () => {
    return <div className={classes.FeedsHeader}>
        <ProfilePicture size="small" />
        <div className={classes.FeedsHeader__searchbox}>
            <input type="text" placeholder="Write something here..." />
            <div className={classes.Icon}><FontAwesomeIcon icon={faSearch} /></div>
        </div>
    </div>
};

export default feedsHeader;