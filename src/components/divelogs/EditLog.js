import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchLog, editLog } from '../../actions'
import Form from './Form'
import LinkButton from '../LinkButton'

const EditLog = props => {

    const token = localStorage.getItem('token')
    const id = props.match.params.id

    useEffect(() => {
        props.fetchLog(token, id)
    }, [])

    const submit = formValues => {
        props.editLog(id, formValues, token)
    }

    if (!props.log) return <div>Loading...</div>
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
                location={ props.log.location }
                divesite={ props.log.divesite }
                max_depth={ props.log.max_depth }
                bottom_time={ props.log.bottom_time }
                visibility={ props.log.visibility }
                water_temp={ props.log.water_temp }
                weight={ props.log.weight }
                notes={ props.log.notes }
                submit={ submit }
            />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    log: state.logs[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchLog, editLog })(EditLog)

