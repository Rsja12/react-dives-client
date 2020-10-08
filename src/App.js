import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Error from './components/Error';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import LogsIndex from './components/divelogs/LogsIndex';
import CreateLog from './components/divelogs/CreateLog';
import ShowLog from './components/divelogs/ShowLog';
import EditLog from './components/divelogs/EditLog';
import DeleteLog from './components/divelogs/DeleteLog';
import SignUp from './authentication/SignUp';
import SignIn from './authentication/SignIn';
import history from './history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <NavBar />
                    <Switch>
                        <PublicRoute exact path='/' component={HomePage} />
                        <PublicRoute exact path='/signup' component={SignUp} />
                        <PublicRoute exact path='/signin' component={SignIn} />
                        <PrivateRoute
                            exact
                            path='/dashboard'
                            component={LogsIndex}
                        />
                        <PrivateRoute
                            exact
                            path='/logs/new'
                            component={CreateLog}
                        />
                        <PrivateRoute
                            exact
                            path='/logs/:id'
                            component={ShowLog}
                        />
                        <PrivateRoute
                            exact
                            path='/logs/edit/:id'
                            component={EditLog}
                        />
                        <PrivateRoute
                            exact
                            path='/logs/delete/:id'
                            component={DeleteLog}
                        />
                        <Route component={Error} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
