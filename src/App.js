import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Error from './components/Error'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import Dashboard from './components/divelogs/Dashboard'
import LogsIndex from './components/divelogs/LogsIndex'
import CreateLog from './components/divelogs/CreateLog'
import ShowLog from './components/divelogs/ShowLog'
import EditLog from './components/divelogs/EditLog'
import DeleteLog from './components/divelogs/DeleteLog'
import history from './history'

const App = () => {
    return (
        <div>
            <Router history={ history }>
                <div>
                    <NavBar />
                    <Switch>
                        <PublicRoute exact path='/' component={ HomePage } />
                        <PrivateRoute exact path='/dashboard' component={ Dashboard } />
                        <PrivateRoute exact path='/logs' component={ LogsIndex } />
                        <PrivateRoute exact path='/logs/new' component={ CreateLog } />
                        <PrivateRoute exact path='/logs/:id' component={ ShowLog } />
                        <PrivateRoute exact path='/logs/edit/:id' component={ EditLog } />
                        <PrivateRoute exact path='/logs/delete/:id' component={ DeleteLog } />
                        <Route component={ Error } />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App
