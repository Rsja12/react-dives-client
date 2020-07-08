import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { fetchLogs } from '../../actions'
import LogItem from './LogItem'
import Pagination from '../Pagination'
import AddDiveBtn from '../AddDiveBtn'

export class LogsIndex extends Component {

    state = {
        currentPage: 1,
        logsPerPage: 6,
    }

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

    nextPage = () => {
        const lastPage = this.props.logs.length / 6
        if (this.state.currentPage < lastPage) {
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
    }

    prevPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    }
    
    render() {
        const { logsPerPage } = this.state
        const { logs } = this.props
        if (!this.props.token) return <div>Loading...</div>

        return (
            <Fragment>
                <AddDiveBtn />
                { this.renderLogs() }
                <Pagination 
                    logsPerPage={ logsPerPage } 
                    totalLogs={ logs.length } 
                    nextPage={ this.nextPage }
                    prevPage={ this.prevPage }
                />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    logs: Object.values( state.logs ),
    token: state.auth.isSignedIn
})

export default connect(mapStateToProps, { fetchLogs })(LogsIndex)
