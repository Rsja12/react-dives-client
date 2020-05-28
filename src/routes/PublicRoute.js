import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ isSignedIn, component: Component, ...rest }) => {
    return(
        <div>
            <Route {...rest} render={ (props) => (
                isSignedIn ? <Redirect to='/logs' /> : <Component {...props} />
            )} />
        </div>
    )

}


const mapStateToProps = state => ({
    isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps)(PublicRoute)
