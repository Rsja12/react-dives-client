import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions'

export class SignUp extends Component {

    state = {
        user: {
            name: '',
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

        this.props.signUp(this.state)
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input
                    type='name'
                    name='name'
                    placeholder='Please enter your name'
                    value={ this.state.name }
                    onChange={ this.handleInputChange }
                    autoComplete='off'
                 />
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
                 <input type='submit' value='Sign Up' />
            </form>
        )
    }
}

export default connect(null, { signUp })(SignUp)
