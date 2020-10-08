import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../actions';

const NavBar = ({ isSignedIn, signOut }) => {
    const renderSignOut = () => {
        if (isSignedIn) {
            return (
                <button
                    className='btn btn-outline-light'
                    onClick={() => signOut()}
                >
                    Sign Out
                </button>
            );
        }
    };

    return (
        <nav className='navbar navbar-dark bg-dark'>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link className='navbar-brand text-white' to='/'>
                        React Dives
                    </Link>
                </li>
            </ul>
            <ul className='nav'>
                <li className='nav-item'>{renderSignOut()}</li>
            </ul>
        </nav>
    );
};

const mapStateToProps = (state) => ({
    isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { signOut })(NavBar);
