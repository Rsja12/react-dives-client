import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <ul className='nav justify-content-center'>
            <li className='nav-item'>
                <Link className='nav-link' to='/'>
                    React Dives
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                    About
                </Link>
            </li>
        </ul>
    )
}

export default NavBar
