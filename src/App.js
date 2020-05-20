import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import About from './components/About'
import NavBar from './components/NavBar'
import Error from './components/Error'

const App = () => {
    return (
        <div className='container-fliud'>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route exact path='/' component={ HomePage } />
                    <Route exact path='/about' component={ About } />
                    <Route component={ Error } />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
