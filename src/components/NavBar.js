import React from 'react'
import { Link } from 'react-router-dom'

import GoogleAuth from '../authentication/GoogleAuth'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link className='navbar-brand' to='/'>
                        React Dives
                    </Link>
                </li>
            </ul>
            <ul className='nav justify-content-end'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/about'>
                        About
                    </Link>
                </li>
                <GoogleAuth />
            </ul>
        </nav>
    )
}

export default NavBar
