import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import About from './components/About'
import NavBar from './components/NavBar'

const App = () => {
    return (
        <div class='container-fliud'>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route exact path='/' component={ HomePage } />
                    <Route exact path='/about' component={ About } />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
