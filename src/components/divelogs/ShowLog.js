import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const ShowLog = ({ log }) => {
    return (
        <Fragment>
            <h2 className='text-center'>Dive Number { log.id } on { log.date }</h2>
            <div className='center-container'>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Location: {log.location}</li>
                    <li class="list-group-item">Divesite: {log.divesite}</li>
                    <li class="list-group-item">Max Depth: {log.maxDepth} Ft.</li>
                    <li class="list-group-item">Bottom Time: {log.bottomTime} Min.</li>
                    <li class="list-group-item">Visibility: {log.visibility} Ft.</li>
                    <li class="list-group-item">Water Temp: {log.waterTemp} F</li>
                    <li class="list-group-item">Weight: {log.weight} Lbs.</li>
                    <li class="list-group-item">Notes: {log.notes}</li>
                </ul>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({
    log: state.logs[ownProps.match.params.id]
})

export default connect(mapStateToProps)(ShowLog)
