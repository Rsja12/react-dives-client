import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { fetchLogs } from '../../actions'
import LogItem from './LogItem'
import AddDiveBtn from '../AddDiveBtn'

export class LogsIndex extends Component {

    componentDidMount() {
        this.props.fetchLogs(this.props.token)
    }

    renderLogs() {        
        return this.props.logs.map( log => {
            return(
                <div className='center-container' key={ log.id }>
                    <LogItem log={ log } />
                </div>
            )
        } )
    }
    
    render() {
        if (!this.props.token) return <div>Loading...</div>

        return (
            <Fragment>
                <AddDiveBtn />
                { this.renderLogs() }
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    logs: Object.values( state.logs ),
    token: state.auth.isSignedIn
})

export default connect(mapStateToProps, { fetchLogs })(LogsIndex)
