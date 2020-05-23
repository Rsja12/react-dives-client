import React, { Component } from 'react'

export class Form extends Component {

    state = {
        location: '',
        divesite: '',
        maxDepth: null,
        bottomTime: null,
        visibility: null,
        waterTemp: null,
        weight: null,
        notes: ''
    }

    render() {
        return (
            <div className='form-container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <label htmlFor='location'>Location</label>
                        <input 
                            type='text'
                            onChange={ this.handleTextInput }
                            value={ location }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
