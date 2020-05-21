import React from 'react'

import '../styles/index.css'
import GoogleAuth from '../authentication/GoogleAuth'

const HomePage = () => {
    return (
        <div className='homePage'>
            <h1>React Dives</h1>
            <GoogleAuth />
            <h1>Start Logging Dives</h1>      
        </div>
    )
}

export default HomePage
