import React from 'react';
import profileImage from '../../assets/images/profile-image.png';
import classes from './ProfilePicture.module.css';

const profilePicture = (props) => {
    const classNames = [classes.ProfilePicture];
    if(props.size === 'small') {
        classNames.push(classes['ProfilePicture--small']);
    }
    return <div className={classNames.join(' ')}>
        <img src={profileImage} />
    </div>
}

export default profilePicture;