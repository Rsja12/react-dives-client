import React from 'react'
import { Link } from 'react-router-dom'

import GoogleAuth from '../authentication/GoogleAuth'

const NavBar = () => {
    return (
        <nav className='navbar bg-dark'>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link className='navbar-brand text-white' to='/'>
                        React Dives
                    </Link>
                </li>
            </ul>
            <ul className='nav justify-content-end'>
                <li className='nav-item'>
                    <Link className='nav-link text-white' to='/about'>
                        About
                    </Link>
                </li>
                <GoogleAuth />
            </ul>
        </nav>
    )
}

export default NavBar
