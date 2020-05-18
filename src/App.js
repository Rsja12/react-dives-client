import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './components/HomePage'

const App = () => {
    return (
        <div className='ui container'>
            <BrowserRouter>
                <Route exact path='/' component={ HomePage } />
            </BrowserRouter>
        </div>
    )
}

export default App
