import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLogs } from '../../actions'

import LogItem from './LogItem'

export class LogsIndex extends Component {

    componentDidMount(){
        this.props.fetchLogs()
    }

    renderLogs() {
        return this.props.logs.map( log => {
            return(
                <div className='center-container'>
                    <LogItem log={ log } key={ log.id } />
                </div>
            )
        } )
    }
    
    render() {
        return (
            <div>
                { this.renderLogs() }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    logs: Object.values( state.logs )
})

export default connect(mapStateToProps, { fetchLogs })(LogsIndex)
