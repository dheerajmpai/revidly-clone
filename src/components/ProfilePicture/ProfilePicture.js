import React from 'react';
import classes from './ProfilePicture.module.css';

const profilePicture = (props) => {
    const classNames = [classes.ProfilePicture];
    if(props.size === 'small') {
        classNames.push(classes['ProfilePicture--small']);
    }
    return <div className={classNames.join(' ')}></div>
}

export default profilePicture;