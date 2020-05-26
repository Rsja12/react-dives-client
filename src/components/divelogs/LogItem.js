import React from 'react'
import { Link } from 'react-router-dom'

const LogItem = ({ log }) => {
    return (
        <Link to={ `/logs/${log.id}` }>
            <div className='card'>
                <div className='card-header'>Logged on { log.date }</div>
                <div className='card-body'>
                    <div className='card-title'>{ log.location} - { log.divesite }</div>
                    <div className='card-body'>{ log.notes }</div>
                </div>
            </div>
        </Link>
    )
}

export default LogItem
