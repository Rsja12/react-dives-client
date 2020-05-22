import React from 'react'
import { connect } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'

const PublicRoute = ({ isSignedIn, component: Component, ...rest }) => {

    const history = useHistory()
    
    if (!isSignedIn) return history.push('/')

}

const mapStateToProps = state => ({
    isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps)(PublicRoute)
