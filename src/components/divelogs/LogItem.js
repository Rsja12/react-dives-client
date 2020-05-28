import React from 'react'
import { Link } from 'react-router-dom'

const LogItem = ({ log }) => {
    return (
        <Link to={ `/logs/${log.id}` } style={{ textDecoration: 'none' }}>
            <div className='row'>
                <div className='col-sm-12'>
                    <button className='btn btn-outline-dark btn-block btn-lg'>{ log.divesite } - { log.location } - { log.date } </button><br />
                </div>
            </div>
        </Link>
    )
}

export default LogItem
