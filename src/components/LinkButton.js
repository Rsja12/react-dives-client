import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ path, text, className }) => {
    return (
        <div>
            <Link to={ path }>
                <button className={className}>
                    { text }
                </button>
            </Link>
        </div>
    )
}

export default LinkButton
