import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchLog } from '../../actions'
import Form from './Form'

export class EditLog extends Component {

    componentDidMount() {
        this.props.fetchLog( this.props.match.params.id )
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
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    log: state.logs[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchLog })(EditLog)
