import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Error from './components/Error'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import Dashboard from './components/divelogs/Dashboard'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <PublicRoute exact path='/' component={ HomePage } />
                        <PrivateRoute exact path='/dashboard' component={ Dashboard } />
                        <Route component={ Error } />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
