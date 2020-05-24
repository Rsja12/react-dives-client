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

        const { location, divesite, maxDepth, bottomTime, visibility, waterTemp, weight, notes } = this.state

        return (
            <form className='form-container container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <label htmlFor='location'>Location</label>
                        <input 
                            className='form-control'
                            type='text'
                            id='location'
                            onChange={ this.handleTextInput }
                            value={ location }
                        />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='divesite'>Divesite</label>
                        <input 
                            className='form-control'
                            type='text'
                            id='divesite'
                            onChange={ this.handleTextInput }
                            value={ divesite }
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <label htmlFor='maxDepth'>maxDepth</label>
                        <input 
                            className='form-control'
                            type='number'
                            id='maxDepth'
                            onChange={ this.handleTextInput }
                            value={ maxDepth }
                        />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='bottomtime'>Bottom Time</label>
                        <input 
                            className='form-control'
                            type='number'
                            id='bottomTime'
                            onChange={ this.handleTextInput }
                            value={ bottomTime }
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-4'>
                        <label htmlFor='visiblity'>Visiblity</label>
                        <input 
                            className='form-control'
                            type='number'
                            id='visibility'
                            onChange={ this.handleTextInput }
                            value={ visibility }
                        />
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor='waterTemp'>Water Temp</label>
                        <input 
                            className='form-control'
                            type='number'
                            id='waterTemp'
                            onChange={ this.handleTextInput }
                            value={ waterTemp }
                        />
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor='weight'>Weight</label>
                        <input 
                            className='form-control'
                            type='number'
                            id='weight'
                            onChange={ this.handleTextInput }
                            value={ weight }
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-8'>
                        <label htmlFor='notes'>Notes</label>
                        <textarea 
                            className='form-control'
                            id='notes'
                            onChange={ this.handleTextInput }
                            value={ notes }
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-8'>
                        <button 
                            type='submit'
                            className='btn btn-dark btn-block'>
                            Submit
                        </button>
                    </div>
                </div>

            </form>
        )
    }
}

export default Form
