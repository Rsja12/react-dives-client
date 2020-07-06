import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import BackButton from '../BackButton'

export class ShowLog extends Component {
    render() {
        const { log } = this.props
        return (
                <div>
                    <BackButton path={'/logs'} text={'Back to all dives'} />
                    <div className='center-container'>
                        <div className='row'>
                            <div className='col text-left'>
                                <ul className="list-group list-group-flush">
                                    {/* <li className="list-group-item">
                                        <div className='row'>
                                            <div className='col text-left text-uppercase font-weight-bold'>
                                                date:
                                            </div>
                                            <div className='col text-right'>
                                                { log.date }
                                            </div>
                                        </div>
                                    </li> */}
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
                                <Link 
                                style={{ textDecoration: 'none' }}
                                to={`/logs/edit/${log.id}`} 
                                className='btn btn-block btn-dark'>
                                    Edit this dive
                                </Link>
                            </div>
                            <div className='col-md-6'>
                                <Link
                                style={{ textDecoration: 'none' }}
                                to={`/logs/delete/${log.id}`}
                                className='btn btn-danger btn-block'>
                                    Delete this dive
                                </Link>
                            </div>
                        </div>
                    </div>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    log: state.logs[ownProps.match.params.id]
})

export default connect(mapStateToProps)(ShowLog)

