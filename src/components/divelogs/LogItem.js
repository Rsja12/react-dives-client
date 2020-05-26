import React from 'react'
import { Link } from 'react-router-dom'

const LogItem = ({ log }) => {
    return (
        <Link to={ `/logs/${log.id}` }>
            <div className='row'>
                <div className='col-sm-11'>
                    <div className='card'>
                        <div className='card-title text-right'>Logged on { log.date }</div>
                        <div className='card-title text-center'>{ log.location } - { log.divesite}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default LogItem
