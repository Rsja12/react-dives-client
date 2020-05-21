import React from 'react'

import '../styles/index.css'
import GoogleAuth from '../authentication/GoogleAuth'

const HomePage = () => {
    return (
        <div className='homePage'>
            <p>Dive In</p>
            <GoogleAuth /> 
            <p>Start Logging Dives</p>      
        </div>
    )
}

export default HomePage
