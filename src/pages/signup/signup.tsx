import React from 'react';
import { Link } from 'react-router-dom';
import './signup.scss';

function Signup() {
    return (
        <>
            <h1>Signup Page</h1>
            <Link to="/login">Login</Link>
        </>
    )
}

export default Signup
