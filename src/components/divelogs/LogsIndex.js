import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLogs } from '../../actions'

export class LogsIndex extends Component {

    componentDidMount(){
        this.props.fetchLogs()
    }

    
    
    render() {
        console.log(this.props.logs)
        return (
            <div>
                Index
            </div>
        )
    }
}

const mapStateToProps = state => ({
    logs: Object.values( state.logs )
})

export default connect(mapStateToProps, { fetchLogs })(LogsIndex)
