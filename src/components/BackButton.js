import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ path, text }) => {
    return (
        <div className='top-row'>
            <Link to={ path }>
                <button className='btn btn-outline-primary'>
                    { text }
                </button>
            </Link>
        </div>
    )
}

export default BackButton
