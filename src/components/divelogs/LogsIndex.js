import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchLogs } from '../../actions'

import LogItem from './LogItem'

export class LogsIndex extends Component {

    componentDidMount(){
        this.props.fetchLogs()
    }

    renderLogs() {
        return this.props.logs.map( log => {
            if (this.props.currentUserId === log.userId) {
                return(
                    <div className='center-container'>
                        <LogItem log={ log } key={ log.id } />
                    </div>
                )
            }
            return null
        })
    }
    
    render() {
        return (
            <Fragment>
                { this.renderLogs() }
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    logs: Object.values( state.logs ),
    currentUserId: state.auth.userId
})

export default connect(mapStateToProps, { fetchLogs })(LogsIndex)
