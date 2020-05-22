import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

export class Form extends Component {
    render() {
        console.log(this.props)
        return (
            <form noValidate>

                <div className='form row'>
                    <div className='col-md-6 form-group'>
                        <label htmlFor="location">Location</label>
                        <input 
                            type='text'
                            className='form-control'
                            id='location'
                            required
                        />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor="location">Divesite</label>
                        <input 
                            type='text'
                            className='form-control'
                            id='location'
                            required
                        />
                    </div>
                </div>

                <div className='form row'>
                    <div className='col-md-3 form-group'>
                        <label htmlFor="location">Max Depth</label>
                        <input 
                            type='text'
                            className='form-control'
                            id='location'
                            required
                        />
                    </div>
                    <div className='col-md-3'>
                        <label htmlFor="location">Visibility</label>
                        <input 
                            type='text'
                            className='form-control'
                            id='location'
                            required
                        />
                    </div>
                    <div className='col-md-3'>
                        <label htmlFor="location">Water Temp</label>
                        <input 
                            type='text'
                            className='form-control'
                            id='location'
                            required
                        />
                    </div>
                    <div className='col-md-3'>
                        <label htmlFor="location">Weight</label>
                        <input 
                            type='text'
                            className='form-control'
                            id='location'
                            required
                        />
                    </div>
                </div>

            </form>
        )
    }
}

export default reduxForm({ 
    form: 'logForm'
})(Form)
