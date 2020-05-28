import React, { Component } from 'react'

export class Form extends Component {

    state = {
        location: this.props.location || '',
        divesite: this.props.divesite || '',
        maxDepth: this.props.maxDepth || '',
        bottomTime: this.props.bottomTime || '',
        visibility: this.props.visibility || '',
        waterTemp: this.props.waterTemp || '',
        weight: this.props.weight || '',
        notes: this.props.notes || ''
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.submit( this.state )
    }

    render() {

        const { location, divesite, maxDepth, bottomTime, visibility, waterTemp, weight, notes } = this.state

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
                        <label htmlFor='maxDepth'>Max Depth</label>
                        <input 
                            autoComplete='off'
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
                            autoComplete='off'
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
                        <label htmlFor='waterTemp'>Water Temp</label>
                        <input  
                            autoComplete='off'
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
