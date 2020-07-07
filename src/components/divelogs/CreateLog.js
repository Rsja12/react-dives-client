import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createLog } from '../../actions'
import Form from './Form'
import BackButton from '../BackButton'

export class CreateLog extends Component {

    submit = formValues => {
        const token = localStorage.getItem('token')
        this.props.createLog(formValues, token )
    }

    render() {
        return (
            <div>
                <BackButton path={`/dashboard`} text={ 'Nevermind' } />
                <h2 className='text-center edit-page'>Add Another Dive!</h2>
                <Form submit={ this.submit } />
            </div>
        )
    }
}

export default connect(null, { createLog })(CreateLog)
