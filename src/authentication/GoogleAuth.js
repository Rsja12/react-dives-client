import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

export class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_CLIENT_ID,
                scope: 'email'
            })
            .then( () => {
                this.auth = window.gapi.auth2.getAuthInstance()
                // immediately update auth state in redux store
                this.onAuthChange( this.auth.isSignedIn.get() )
                // listen for changes
                this.auth.isSignedIn.listen( this.onAuthChange )
            })
        })
    }

    onAuthChange = isSignedIn => {
        if( isSignedIn ) {
            // passes google id as arg to signIn()
            this.props.signIn( this.auth.currentUser.get().getId() )
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }
    
    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthBtn() {
        if (this.props.isSignedIn === null)  {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button
                    onClick={ this.onSignOutClick }
                    className='btn btn-danger'>
                        Sign Out
                </button>
            )
        } else {
            return ( 
                <button
                    onClick={ this.onSignInClick }
                    className='btn btn-light'>
                        Continue with Google
                </button>
            )
        }
    }
    
    render() {
        return (
            <div>
                { this.renderAuthBtn() }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)
