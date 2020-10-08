import React, { useState } from 'react';

const Form = (props) => {
    const initialFormState = {
        divelog: {
            location: props.location || '',
            divesite: props.divesite || '',
            max_depth: props.max_depth || '',
            bottom_time: props.bottom_time || '',
            visibility: props.visibility || '',
            water_temp: props.water_temp || '',
            weight: props.weight || '',
            notes: props.notes || '',
        },
    };

    const [state, setState] = useState(initialFormState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setState((prevState) => ({
            ...prevState,
            divelog: {
                ...prevState.divelog,
                [name]: value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.submit(state);
    };

    return (
        <form
            className='center-container container-fluid'
            onSubmit={handleSubmit}
        >
            <div className='row'>
                <div className='col-md-6'>
                    <label htmlFor='location'>Location</label>
                    <input
                        autoComplete='off'
                        className='form-control'
                        type='text'
                        id='location'
                        name='location'
                        onChange={handleInputChange}
                        value={state.divelog.location}
                        required
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
                        onChange={handleInputChange}
                        value={state.divelog.divesite}
                        required
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
                        onChange={handleInputChange}
                        value={state.divelog.max_depth}
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
                        onChange={handleInputChange}
                        value={state.divelog.bottom_time}
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
                        onChange={handleInputChange}
                        value={state.divelog.visibility}
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
                        onChange={handleInputChange}
                        value={state.divelog.water_temp}
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
                        onChange={handleInputChange}
                        value={state.divelog.weight}
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
                        onChange={handleInputChange}
                        value={state.divelog.notes}
                    />
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <button
                        style={{ marginTop: '7%' }}
                        type='submit'
                        className='btn btn-success btn-block'
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;
