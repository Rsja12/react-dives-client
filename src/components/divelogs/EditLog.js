import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchLog, editLog } from '../../actions'
import Form from './Form'
import BackButton from '../BackButton'

export class EditLog extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        const id = this.props.match.params.id
        this.props.fetchLog(token, id)
    }

    submit = formValues => {
        const id = this.props.match.params.id
        this.props.editLog( id, formValues )
    }

    render() {
        
        const { location, divesite, maxDepth, bottomTime, visibility, waterTemp, weight, notes, id } = this.props.log
        return (
            <div>
                <BackButton path={`/logs/${id}`} text={ 'Nevermind' } />
                <h2 className='text-center edit-page'>Edit This Dive</h2>
                <Form
                    location={ location }
                    divesite={ divesite }
                    maxDepth={ maxDepth }
                    bottomTime={ bottomTime }
                    visibility={ visibility }
                    waterTemp={ waterTemp }
                    weight={ weight }
                    notes={ notes }
                    submit={ this.submit }
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    log: state.logs[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchLog, editLog })(EditLog)
