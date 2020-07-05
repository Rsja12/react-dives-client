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
    
    render() {

        
    }
}

const mapStateToProps = state => ({
    logs: Object.values( state.logs )
})

export default connect(mapStateToProps, { fetchLogs })(LogsIndex)
