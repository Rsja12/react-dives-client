import React from 'react'
import { Link } from 'react-router-dom'

const CardLink = ({ title, path }) => {
    return (
        <Link to={ path } >
            <div className='card'>
                <div className='card-body'>
                    <h2 className='card-title'>{ title }</h2>
                </div>
            </div>
        </Link>
    )
}

export default CardLink
