import React from 'react'

import '../styles/index.css'
import GoogleAuth from '../authentication/GoogleAuth'

const HomePage = () => {
    return (
        <div className='homePage'>
            <p>Dive In</p>
            <GoogleAuth />            
        </div>
    )
}

export default HomePage
