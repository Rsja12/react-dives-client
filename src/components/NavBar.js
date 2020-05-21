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
                
                <div className='nav justify-content-end'>
                <li className='nav-item'>
                        <Link 
                        className='navbar-brand text-white' 
                        to='/about'>
                            About
                        </Link>
                    </li>
                    <GoogleAuth />
                </div>
            </nav>
        )
    }
    // } else {
    //     return (
    //         <nav className='navbar fixed-top bg-dark'>
    //             <ul className='nav'>
    //                 <li className='nav-item'>
    //                     <Link 
    //                     className='navbar-brand text-white' 
    //                     to='/'>
    //                         React Dives
    //                     </Link>
    //                 </li>
    //             </ul>
                
    //             <div className='nav justify-content-end'>
    //                 <GoogleAuth />
    //             </div>
    //         </nav>
    //     ) 
    // }
        return null
}

const mapStateToProps = state => ({
    isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps)(NavBar)
