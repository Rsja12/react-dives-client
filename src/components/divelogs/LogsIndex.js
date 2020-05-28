import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { fetchLogs } from '../../actions'
import LogItem from './LogItem'
import Pagination from '../Pagination'
import AddDiveBtn from '../AddDiveBtn'

export class LogsIndex extends Component {

    state = {
        currentPage: 1,
        logsPerPage: 6
    }

    componentDidMount(){
        this.props.fetchLogs()
    }

    renderLogs() {
        // Grab 6 logs 
        const { currentPage, logsPerPage } = this.state
        const lastLogIdx = currentPage * logsPerPage
        const firstLogIdx = lastLogIdx - logsPerPage
        const currentLogs = this.props.logs.slice( firstLogIdx, lastLogIdx )

        // sort current logs
        const sortedLogs = currentLogs.sort( (a, b) => a.date < b.date ? 1 : -1 )

        return sortedLogs.map( log => {
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

        return (
            <Fragment>
                <AddDiveBtn />
                { this.renderLogs() }
                <Pagination 
                    logsPerPage={ logsPerPage } 
                    totalLogs={ logs.length } 
                    nextPage={ this.nextPage }
                    prevPage={ this.prevPage }/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    logs: Object.values( state.logs ),
    currentUserId: state.auth.userId
})

export default connect(mapStateToProps, { fetchLogs })(LogsIndex)
