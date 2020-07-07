import React, { Component } from 'react'

export class Form extends Component {

    state = {
        divelog: {
            location: this.props.location || '',
            divesite: this.props.divesite || '',
            max_depth: this.props.max_depth || '',
            bottom_time: this.props.bottom_time || '',
            visibility: this.props.visibility || '',
            water_temp: this.props.water_temp || '',
            weight: this.props.weight || '',
            notes: this.props.notes || ''
        }
    }

    handleInput = e => {
        this.setState({
            divelog: {
                ...this.state.divelog,
                [e.target.name]: e.target.value
            }
                
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.submit( this.state )
    }

    render() {

        const { location, divesite, max_depth, bottom_time, visibility, water_temp, weight, notes } = this.state

        return (
            <form className='center-container container-fluid' onSubmit={ this.handleSubmit }>
                <div className='row'>
                    <div className='col-md-6'>
                        <label htmlFor='location'>Location</label>
                        <input 
                            autoComplete='off'
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
                            autoComplete='off'
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
                        <label htmlFor='max_depth'>Max Depth (Ft)</label>
                        <input 
                            autoComplete='off'
                            className='form-control'
                            type='number'
                            id='max_depth'
                            name='max_depth'
                            onChange={ this.handleInput }
                            value={ max_depth }
                        />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='bottom_time'>Bottom Time (Min)</label>
                        <input 
                            autoComplete='off'
                            className='form-control'
                            type='number'
                            id='bottom_time'
                            name='bottom_time'
                            onChange={ this.handleInput }
                            value={ bottom_time }
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-4'>
                        <label htmlFor='visiblity'>Visiblity (Ft)</label>
                        <input
                            autoComplete='off' 
                            className='form-control'
                            type='number'
                            id='visibility'
                            name='visibility'
                            onChange={ this.handleInput }
                            value={ visibility }
                        />
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor='water_temp'>Water Temp (F)</label>
                        <input  
                            autoComplete='off'
                            className='form-control'
                            type='number'
                            id='water_temp'
                            name='water_temp'
                            onChange={ this.handleInput }
                            value={ water_temp }
                        />
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor='weight'>Weight (Lbs)</label>
                        <input 
                            autoComplete='off'
                            className='form-control'
                            type='number'
                            id='weight'
                            name='weight'
                            onChange={ this.handleInput }
                            value={ weight }
                        />
                    </div>
                </div>

                <div className='row justify-content-center'>
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

                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <button 
                            style={{ marginTop: '7%' }}
                            type='submit'
                            className='btn btn-success btn-block'>
                            Submit
                        </button>
                    </div>
                </div>

            </form>
        )
    }
}

export default Form
