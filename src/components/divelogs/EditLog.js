import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchLog, editLog } from '../../actions'
import Form from './Form'
import LinkButton from '../LinkButton'

export class EditLog extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        const id = this.props.match.params.id
        this.props.fetchLog(token, id)
    }
    
    submit = formValues => {
        const token = localStorage.getItem('token')
        const id = this.props.match.params.id
        this.props.editLog(id, formValues, token)
    }

    render() {
        if (!this.props.log) {
            return <div>Loading...</div>
        }
        const { location, divesite, max_depth, bottom_time, visibility, water_temp, weight, notes, id } = this.props.log
        return (
            <div>
                <div className='top-row'>
                    <LinkButton 
                        className={'btn btn-outline-dark'}
                        path={`/logs/${id}`} 
                        text={'Nevermind'} 
                    />
                </div>
                <h2 className='text-center edit-page'>Edit This Dive</h2>
                <Form
                    location={ location }
                    divesite={ divesite }
                    max_depth={ max_depth }
                    bottom_time={ bottom_time }
                    visibility={ visibility }
                    water_temp={ water_temp }
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

