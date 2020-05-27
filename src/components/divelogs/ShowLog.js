import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ShowLog = ({ log }) => {
    return (
        <Fragment>
            <h2 className='text-center'>Dive Number { log.id } on { log.date }</h2>
            <div className='center-container'>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Location: {log.location}</li>
                    <li className="list-group-item">Divesite: {log.divesite}</li>
                    <li className="list-group-item">Max Depth: {log.maxDepth} Ft.</li>
                    <li className="list-group-item">Bottom Time: {log.bottomTime} Min.</li>
                    <li className="list-group-item">Visibility: {log.visibility} Ft.</li>
                    <li className="list-group-item">Water Temp: {log.waterTemp} F</li>
                    <li className="list-group-item">Weight: {log.weight} Lbs.</li>
                    <li className="list-group-item">Notes: {log.notes}</li>
                </ul>
                <div className='row text-center'>
                    <div className='col-md-5'>
                        <Link 
                        to={`/logs/edit/${log.id}`} 
                        className='btn btn-block btn-dark'>
                            Edit this dive
                        </Link>
                    </div>
                    <div className='col-md-5'>
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
