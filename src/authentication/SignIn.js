import React, { Component } from 'react'
import { connect } from 'react-redux'

import { customSignIn } from '../actions'

export class SignIn extends Component {

    state = {
        user: {
            email: '',
            password: ''
        }
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.customSignIn(this.state)
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input
                    type='email'
                    name='email'
                    placeholder='Please enter your email'
                    value={ this.state.email }
                    onChange={ this.handleInputChange }
                    autoComplete='off'
                 />
                <input
                    type='password'
                    name='password'
                    placeholder='Please enter your password'
                    value={ this.state.password }
                    onChange={ this.handleInputChange }
                    autoComplete='off'
                 />
                 <input type='submit' value='Sign In' />
            </form>
        )
    }
}

export default connect(null, { customSignIn })(SignIn)
