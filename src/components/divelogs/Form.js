import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLog } from '../../actions'

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

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
                            name='location'
                            onChange={ this.handleInput }
                            value={ location }
                        />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='divesite'>Divesite</label>
                        <input 
                            className='form-control'
                            type='text'
                            id='divesite'
                            name='divesite'
                            onChange={ this.handleInput }
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
                            name='maxDepth'
                            onChange={ this.handleInput }
                            value={ maxDepth }
                        />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='bottomtime'>Bottom Time</label>
                        <input 
                            className='form-control'
                            type='number'
                            id='bottomTime'
                            name='bottomTime'
                            onChange={ this.handleInput }
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
                            name='visibility'
                            onChange={ this.handleInput }
                            value={ visibility }
                        />
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor='waterTemp'>Water Temp</label>
                        <input 
                            className='form-control'
                            type='number'
                            id='waterTemp'
                            name='waterTemp'
                            onChange={ this.handleInput }
                            value={ waterTemp }
                        />
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor='weight'>Weight</label>
                        <input 
                            className='form-control'
                            type='number'
                            id='weight'
                            name='weight'
                            onChange={ this.handleInput }
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
                            name='notes'
                            onChange={ this.handleInput }
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

export default connect(null, { createLog })(Form)
