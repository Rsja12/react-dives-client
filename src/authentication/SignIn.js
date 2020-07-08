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
            <div className='auth-form'>
                <form 
                    className='center-container auth-form' 
                    onSubmit={ this.handleSubmit }>
                    <div className='row justify-content-center'>
                        <div className='col-md-10'>
                            <input
                                className='form-control auth-field'
                                type='email'
                                name='email'
                                placeholder='Please enter your email'
                                value={ this.state.email }
                                onChange={ this.handleInputChange }
                                autoComplete='off'
                                required
                            />
                        </div>
                    </div> 
                    <div className='row justify-content-center'>
                        <div className='col-md-10'>
                            <input
                                className='form-control auth-field'
                                type='password'
                                name='password'
                                placeholder='Please enter your password'
                                value={ this.state.password }
                                onChange={ this.handleInputChange }
                                autoComplete='off'
                                required
                            />
                        </div>
                    </div>                
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <button 
                                style={{ marginTop: '7%' }}
                                className='btn btn-light btn-block'
                                type='submit' 
                            >
                                Sign In!
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { customSignIn })(SignIn)
