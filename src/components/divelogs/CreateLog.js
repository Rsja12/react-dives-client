import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createLog } from '../../actions'
import Form from './Form'

export class CreateLog extends Component {

    submit = formValues => {
        this.props.createLog( formValues )
    }

    render() {
        return (
            <div>
                <Form submit={ this.submit } />
            </div>
        )
    }
}

export default connect(null, { createLog })(CreateLog)
