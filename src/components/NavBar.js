import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-dark'>
            <Link to='/' exact>
                React-Dives
            </Link>
            <Link to='/about' exact>
                About
            </Link>
        </nav>
    )
}

export default NavBar
