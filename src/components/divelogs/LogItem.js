import React from 'react'
import { Link } from 'react-router-dom'

const LogItem = ({ log }) => {
    return (
        <div className='row'>
            <div className='col-sm-12'>
                <Link to={ `/logs/${log.id}` } style={{ textDecoration: 'none' }}>
                    <button className='btn btn-outline-dark btn-block btn-lg'>{ log.divesite } - { log.location } - { log.date } </button><br />
                </Link>
            </div>
        </div>
    )
}

export default LogItem
