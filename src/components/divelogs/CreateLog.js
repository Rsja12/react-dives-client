import React from 'react';
import { connect } from 'react-redux';

import { createLog } from '../../actions';
import Form from './Form';
import LinkButton from '../LinkButton';

const CreateLog = ({ createLog }) => {
    const submit = (formValues) => {
        const token = localStorage.getItem('token');
        createLog(formValues, token);
    };

    return (
        <div>
            <div className='top-row'>
                <LinkButton
                    className={'btn btn-outline-dark'}
                    path={'/dashboard'}
                    text={'Back to all dives'}
                />
            </div>
            <h2 className='text-center edit-page'>Add Another Dive!</h2>
            <Form submit={submit} />
        </div>
    );
};

export default connect(null, { createLog })(CreateLog);
