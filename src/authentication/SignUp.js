import React, { Component } from 'react'

export class SignUp extends Component {

    state = {
        email: '',
        password: ''
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
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
                 <input type='submit' value='Sign Up' />
            </form>
        )
    }
}

export default SignUp
