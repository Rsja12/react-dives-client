import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link className='navbar-brand' to='/'>
                        React Dives
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/about'>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/about'>
                        Sign In
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
