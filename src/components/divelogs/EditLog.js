import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchLog, editLog } from '../../actions'
import Form from './Form'

export class EditLog extends Component {

    componentDidMount() {
        this.props.fetchLog( this.props.match.params.id )
    }

    submit = formValues => {
        this.props.editLog( this.props.match.params.id, formValues )
    }

    render() {
        
        const { location, divesite, maxDepth, bottomTime, visibility, waterTemp, weight, notes } = this.props.log
        return (
            <div>
                <h2 className='text-center'>Edit This Dive</h2>
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
