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
            <div className='homePage'>
                <form className='center-container container-fluid' onSubmit={ this.handleSubmit }>
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <input
                                className='form-control'
                                type='name'
                                name='name'
                                placeholder='Please enter your name'
                                value={ this.state.name }
                                onChange={ this.handleInputChange }
                                autoComplete='off'
                            />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <input
                                className='form-control'
                                type='email'
                                name='email'
                                placeholder='Please enter your email'
                                value={ this.state.email }
                                onChange={ this.handleInputChange }
                                autoComplete='off'
                            />
                        </div>
                    </div> 
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <input
                                className='form-control'
                                type='password'
                                name='password'
                                placeholder='Please enter your password'
                                value={ this.state.password }
                                onChange={ this.handleInputChange }
                                autoComplete='off'
                            />
                        </div>
                    </div>                
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <button 
                                style={{ marginTop: '7%' }}
                                className='btn btn-success btn-block'
                                type='submit' 
                                value='Sign Up' >
                                Sign Up!
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { signUp })(SignUp)
