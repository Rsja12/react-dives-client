import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/index.css';

const HomePage = () => {
    return (
        <div className='homePage'>
            <h1>React Dives</h1>
            <div>
                <Link to='/signup' style={{ textDecoration: 'none' }}>
                    <button className='btn btn-light m-1'>Sign Up</button>
                </Link>
                <Link to='/signin' style={{ textDecoration: 'none' }}>
                    <button className='btn btn-light m-1'>Sign In</button>
                </Link>
            </div>
            <h1>Start Logging Dives</h1>
        </div>
    );
};

export default HomePage;
