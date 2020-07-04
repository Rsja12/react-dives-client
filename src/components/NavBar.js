// import React from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

// // import GoogleAuth from '../authentication/GoogleAuth'

// const NavBar = ({ isSignedIn }) => {

//     if ( isSignedIn ) {
//         return (
//             <nav className='navbar navbar-dark bg-dark'>

//                 <ul className='nav'>
//                     <li className='nav-item'>
//                         <Link 
//                         className='navbar-brand text-white' 
//                         to='/'>
//                             React Dives
//                         </Link>
//                     </li>
//                 </ul>
//                 <ul className='nav'>
//                     <li className='nav-item'>
//                         <Link 
//                         className='text-white' 
//                         to='/'>
//                             Sign Out
//                         </Link>
//                     </li>
//                 </ul>

//                 {/* <ul className='nav justify-content-center'>
//                     <li className='nav-item'>
//                         <Link 
//                         className='nav-link text-white'
//                         to='/logs/new'>
//                             Add A Dive
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link 
//                         className='nav-link text-white'
//                         to='/logs'>
//                             Logbook
//                         </Link>
//                     </li>
//                 </ul> */}
//                 {/* <GoogleAuth /> */}
//             </nav>
//         )
//     }
    
//     return null 
// }

// const mapStateToProps = state => ({
//     isSignedIn: state.auth.isSignedIn
// })

// export default connect(mapStateToProps)(NavBar)
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { signOut } from '../actions'

export class NavBar extends Component {
    render() {
        const { isSignedIn } = this.props
        if (isSignedIn) {
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
                    <ul className='nav'>
                        <li className='nav-item'>
                            <button onClick={ () => this.props.signOut() }>
                                Sign Out
                            </button>
                        </li>
                    </ul>
                </nav>
            )
        }
    }
}

const mapStateToProps = state => ({
    isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps, { signOut })(NavBar)
