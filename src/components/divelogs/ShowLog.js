import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ShowLog = ({ log }) => {
    return (
        <Fragment>
            <div className='center-container'>
                <div className='row'>
                    <div className='col text-center'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span className='text-uppercase font-weight-bold pull-left'>Date:</span><span className='pull-right'> {log.date}</span></li>
                            <li className="list-group-item"><span className='text-uppercase font-weight-bold pull-left'>Location:</span> {log.location}</li>
                            <li className="list-group-item"><span className='text-uppercase font-weight-bold pull-left'>Divesite:</span> {log.divesite}</li>
                            <li className="list-group-item"><span className='text-uppercase font-weight-bold pull-left'>Max Depth:</span> {log.maxDepth} Ft.</li>
                            <li className="list-group-item"><span className='text-uppercase font-weight-bold pull-left'>Bottom Time:</span> {log.bottomTime} Min.</li>
                            <li className="list-group-item"><span className='text-uppercase font-weight-bold pull-left'>Visibility:</span> {log.visibility} Ft.</li>
                            <li className="list-group-item"><span className='text-uppercase font-weight-bold pull-left'>Water Temp:</span> {log.waterTemp} F</li>
                            <li className="list-group-item"><span className='text-uppercase font-weight-bold pull-left'>Weight:</span> {log.weight} Lbs.</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span className='text-uppercase font-weight-bold pull-left'><p>Notes</p></span> {log.notes}</li>
                        </ul>
                    </div>
                </div>
                <div className='row justify-content-center show-buttons'>
                    <div className='col-md-6'>
                        <Link 
                        to={`/logs/edit/${log.id}`} 
                        className='btn btn-block btn-dark'>
                            Edit this dive
                        </Link>
                    </div>
                    <div className='col-md-6'>
                        <Link
                        to={`/logs/delete/${log.id}`}
                        className='btn btn-danger btn-block'>
                            Delete this dive
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({
    log: state.logs[ownProps.match.params.id]
})

export default connect(mapStateToProps)(ShowLog)
