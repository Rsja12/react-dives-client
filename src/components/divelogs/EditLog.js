import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchLog } from '../../actions'

export class EditLog extends Component {

    componentDidMount() {
        this.props.fetchLog( this.props.match.params.id )
    }

    render() {
        return (
            <div>
                Edit
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    log: state.logs[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchLog })(EditLog)
