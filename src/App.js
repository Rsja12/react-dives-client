import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './components/HomePage'
import About from './components/About'
import NavBar from './components/NavBar'
import Error from './components/Error'
import PrivateRoute from './PrivateRoute'

const App = () => {
    return (
        <div className='container-fliud'>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={ HomePage } />
                        <PrivateRoute exact path='/about' component={ About } />
                        <Route component={ Error } />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
