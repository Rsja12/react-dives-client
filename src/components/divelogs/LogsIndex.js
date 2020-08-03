import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchLogs } from '../../actions'
import LogItem from './LogItem'
import LinkButton from '../LinkButton'

const LogsIndex = ({logs, token, fetchLogs}) => {

    useEffect(() => {
        fetchLogs(token)
    }, [])

    const divelogs = logs.map(log => {
        return(
            <div className='center-container'>
                <LogItem log={log} />
            </div>
        )
    })
    
    if (!logs) return <div>Loading...</div>
    return (
        <div>
            <div className='top-row'>
                <div className='row justify-content-center'>
                    <div className='col-md-3'>
                    <LinkButton
                        className={'btn btn-block btn-outline-dark'}
                        path={'/logs/new'}
                        text={<h3>Add a Dive</h3>}
                    />
                    </div>
                </div>
            </div>
            {divelogs}
        </div>
    )
}

const mapStateToProps = state => ({
    logs: Object.values( state.logs ),
    token: state.auth.isSignedIn
})

export default connect(mapStateToProps, { fetchLogs })(LogsIndex)








// import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux'

// import { fetchLogs } from '../../actions'
// import LogItem from './LogItem'
// import AddDiveBtn from '../AddDiveBtn'

// export class LogsIndex extends Component {

//     componentDidMount() {
//         this.props.fetchLogs(this.props.token)
//     }

//     renderLogs() {        
//         return this.props.logs.map( log => {
//             return(
//                 <div className='center-container' key={ log.id }>
//                     <LogItem log={ log } />
//                 </div>
//             )
//         } )
//     }
    
//     render() {
//         // if (!this.props.token) return <div>Loading...</div>

//         return (
//             <Fragment>
//                 <AddDiveBtn />
//                 { this.renderLogs() }
//             </Fragment>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     logs: Object.values( state.logs ),
//     token: state.auth.isSignedIn
// })

// export default connect(mapStateToProps, { fetchLogs })(LogsIndex)