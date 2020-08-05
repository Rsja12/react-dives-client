import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchLog } from '../../actions'
import LinkButton from '../LinkButton'

const ShowLog = ({ log, fetchLog, match }) => {

    useEffect(() => {
        const token = localStorage.getItem('token')
        const id = match.params.id

        fetchLog(token, id)
    }, [])

    if (!log) return <div>Loading...</div>
    return(
            <div>
                <div className='top-row'>
                    <LinkButton 
                    className={'btn btn-outline-dark'}
                    path={'/dashboard'} 
                    text={'Back to all dives'} 
                />
            </div>
            <div className='center-container'>
                <div className='row'>
                    <div className='col text-left'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className='row'>
                                    <div className='col text-left text-uppercase font-weight-bold'>
                                        location:
                                    </div>
                                    <div className='col text-right'>
                                        { log.location }
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className='row'>
                                    <div className='col text-left text-uppercase font-weight-bold'>
                                        divesite:
                                    </div>
                                    <div className='col text-right'>
                                        { log.divesite }
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className='row'>
                                    <div className='col text-left text-uppercase font-weight-bold'>
                                        max depth:
                                    </div>
                                    <div className='col text-right'>
                                        { log.max_depth } ft
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className='row'>
                                    <div className='col text-left text-uppercase font-weight-bold'>
                                        bottom time:
                                    </div>
                                    <div className='col text-right'>
                                        { log.bottom_time } min
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className='row'>
                                    <div className='col text-left text-uppercase font-weight-bold'>
                                        visibility:
                                    </div>
                                    <div className='col text-right'>
                                        { log.visibility } ft
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className='row'>
                                    <div className='col text-left text-uppercase font-weight-bold'>
                                        water temp:
                                    </div>
                                    <div className='col text-right'>
                                        { log.water_temp } F
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className='row'>
                                    <div className='col text-left text-uppercase font-weight-bold'>
                                        weight:
                                    </div>
                                    <div className='col text-right'>
                                        { log.weight } lbs
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='col text-center'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span className='text-uppercase font-weight-bold'><p>Notes</p></span> {log.notes}</li>
                        </ul>
                    </div>
                </div>
                <div className='row justify-content-center show-buttons'>
                    <div className='col-md-6'>
                        <LinkButton 
                            className={'btn btn-dark btn-block'}
                            path={`/logs/edit/${log.id}`}
                            text={'Edit this dive'}
                        />
                    </div>
                    <div className='col-md-6'>
                        <LinkButton 
                            className={'btn btn-danger btn-block'}
                            path={`/logs/delete/${log.id}`}
                            text={'Delete this dive'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

// export class ShowLog extends Component {

//     componentDidMount() {
//         const token = localStorage.getItem('token')
//         const id = this.props.match.params.id
//         this.props.fetchLog(token, id)
//     }

//     render() {
//         if (!this.props.log) {
//             return <div>Loading...</div>
//         }

//         const { log } = this.props
//         return (
//             <div>
//                 <div className='top-row'>
//                     <LinkButton 
//                         className={'btn btn-outline-dark'}
//                         path={'/dashboard'} 
//                         text={'Back to all dives'} 
//                     />
//                 </div>
//                 <div className='center-container'>
//                     <div className='row'>
//                         <div className='col text-left'>
//                             <ul className="list-group list-group-flush">
//                                 <li className="list-group-item">
//                                     <div className='row'>
//                                         <div className='col text-left text-uppercase font-weight-bold'>
//                                             location:
//                                         </div>
//                                         <div className='col text-right'>
//                                             { log.location }
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li className="list-group-item">
//                                     <div className='row'>
//                                         <div className='col text-left text-uppercase font-weight-bold'>
//                                             divesite:
//                                         </div>
//                                         <div className='col text-right'>
//                                             { log.divesite }
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li className="list-group-item">
//                                     <div className='row'>
//                                         <div className='col text-left text-uppercase font-weight-bold'>
//                                             max depth:
//                                         </div>
//                                         <div className='col text-right'>
//                                             { log.max_depth } ft
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li className="list-group-item">
//                                     <div className='row'>
//                                         <div className='col text-left text-uppercase font-weight-bold'>
//                                             bottom time:
//                                         </div>
//                                         <div className='col text-right'>
//                                             { log.bottom_time } min
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li className="list-group-item">
//                                     <div className='row'>
//                                         <div className='col text-left text-uppercase font-weight-bold'>
//                                             visibility:
//                                         </div>
//                                         <div className='col text-right'>
//                                             { log.visibility } ft
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li className="list-group-item">
//                                     <div className='row'>
//                                         <div className='col text-left text-uppercase font-weight-bold'>
//                                             water temp:
//                                         </div>
//                                         <div className='col text-right'>
//                                             { log.water_temp } F
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li className="list-group-item">
//                                     <div className='row'>
//                                         <div className='col text-left text-uppercase font-weight-bold'>
//                                             weight:
//                                         </div>
//                                         <div className='col text-right'>
//                                             { log.weight } lbs
//                                         </div>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className='col text-center'>
//                             <ul className="list-group list-group-flush">
//                                 <li className="list-group-item"><span className='text-uppercase font-weight-bold'><p>Notes</p></span> {log.notes}</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className='row justify-content-center show-buttons'>
//                         <div className='col-md-6'>
//                             <LinkButton 
//                                 className={'btn btn-dark btn-block'}
//                                 path={`/logs/edit/${log.id}`}
//                                 text={'Edit this dive'}
//                             />
//                         </div>
//                         <div className='col-md-6'>
//                             <LinkButton 
//                                 className={'btn btn-danger btn-block'}
//                                 path={`/logs/delete/${log.id}`}
//                                 text={'Delete this dive'}
//                             />
//                         </div>
//                     </div>
//                 </div>
//         </div>
//         )
//     }
// }

const mapStateToProps = (state, ownProps) => ({
    log: state.logs[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchLog })(ShowLog)

