import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

const greeting = ({currentUser, logout}) => {
    const ifUser = () => (
        <div>
            <h2>Hi, {currentUser.username}. Welcome to BenchBnb!</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );
    const noUser = () => (
        <div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
        </div>
    );

    return currentUser ? ifUser() : noUser();
};

export default greeting;