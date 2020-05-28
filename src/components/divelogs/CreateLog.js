import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createLog } from '../../actions'
import Form from './Form'
import BackButton from '../BackButton'

export class CreateLog extends Component {

    submit = formValues => {
        this.props.createLog( formValues )
    }

    render() {
        return (
            <div>
                <BackButton path={`/logs`} text={ 'Nevermind' } />
                <h2 className='text-center edit-page'>Add Another Dive!</h2>
                <Form submit={ this.submit } />
            </div>
        )
    }
}

export default connect(null, { createLog })(CreateLog)
