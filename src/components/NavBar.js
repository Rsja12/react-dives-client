import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import GoogleAuth from '../authentication/GoogleAuth'

const NavBar = ({ isSignedIn }) => {

    if ( isSignedIn ) {
        return (
            <nav className='navbar navbar-dark bg-dark'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link 
                        className='navbar-brand text-white' 
                        to='/'>
                            React Dives
                        </Link>
                    </li>
                </ul>
                <GoogleAuth />
            </nav>
        )
    }
    
    return null 
}

const mapStateToProps = state => ({
    isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps)(NavBar)
