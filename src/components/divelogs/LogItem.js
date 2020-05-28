import React from 'react'
import { Link } from 'react-router-dom'

const LogItem = ({ log }) => {
    return (
        <Link to={ `/logs/${log.id}` }>
            <div className='row'>
                <div className='col-sm-12'>
                    <ul className='list-group'>
                        <h3>
                            <li className='list-group-item text-center text-dark'>{ log.divesite } - { log.location} - { log.date }</li>
                        </h3>
                    </ul>
                </div>
            </div>
        </Link>
    )
}

export default LogItem
