import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ isSignedIn, component: Component, ...rest }) => {
    
    return(
        <div>
            <Route {...rest} render={ (props) => (
                isSignedIn ? <Component {...props} /> : <Redirect to='/' />
            )} />
        </div>
    )
   
}

const mapStateToProps = state => ({
    isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps)(PrivateRoute)
