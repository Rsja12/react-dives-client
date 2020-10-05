import React, { useState } from 'react'
import { connect } from 'react-redux'

import { customSignIn } from '../actions'

export const SignIn = ({ customSignIn }) => {

    const initialState = {
        user: {
            email: '',
            password: ''
        }
    }

    const [state, setState] = useState(initialState)

    const handleInputChange = e => {
        const { name, value } = e.target

        setState(prevState => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value
            }
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();

        customSignIn(state);
    }


    return(
        <div className='auth-form'>
            <form 
            className='center-container auth-form' 
            onSubmit={ handleSubmit }>
                <div className='row justify-content-center'>
                    <div className='col-md-10'>
                        <input
                            className='form-control auth-field'
                            type='email'
                            name='email'
                            placeholder='Please enter your email'
                            value={ state.email }
                            onChange={ handleInputChange }
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
                            value={ state.password }
                            onChange={ handleInputChange }
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

export default connect(null, { customSignIn })(SignIn)
