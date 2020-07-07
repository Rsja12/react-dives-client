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
        token: localStorage.getItem('token')
    }

    componentDidMount() {
        this.props.fetchLogs(this.state.token)
    }

    // componentDidUpdate(prevState) {
        
        
    // }


    // TODO: figure out how to call action creator ONLY AFTER WE HAVE A
    // componentDidUpdate(prevState){
    //     if (this.state.token !== prevState.token) {
    //         this.setState({
    //             token: this.state.token
    //         })
    //     }
    //     console.log(this.state.token)
    // }


    // renderLogs() {
    //     // Grab 6 logs 
    //     const { currentPage, logsPerPage } = this.state
    //     const lastLogIdx = currentPage * logsPerPage
    //     const firstLogIdx = lastLogIdx - logsPerPage
        
    //     // sort logs to get current logs
    //     const sortedLogs = this.props.logs.sort( (a, b) => a.date < b.date ? 1 : -1 )
    //     const currentLogs = sortedLogs.slice( firstLogIdx, lastLogIdx )

    //     return currentLogs.map( log => {
    //         if (this.props.currentUserId === log.userId) {
    //             return(
    //                 <div className='center-container'>
    //                     <LogItem log={ log } key={ log.id } />
    //                 </div>
    //             )
    //         }
    //         return null
    //     })
    // }

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
