import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ path, text }) => {
    return (
        <Fragment>
            <Link to={ path }>
                <button className='btn btn-outline-primary'>
                    { text }
                </button>
            </Link>
        </Fragment>
    )
}

export default BackButton
