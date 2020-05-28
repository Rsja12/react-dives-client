import React from 'react'
import { Link } from 'react-router-dom'

const AddDiveBtn = () => {
    return (
        <div className='top-row'>
            <div className='row justify-content-center'>
                <div className='col-md-3'>
                    <Link to='/logs/new' style={{ textDecoration: 'none' }}>
                        <button className='btn btn-block btn-primary'><h3>Add Dive</h3></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AddDiveBtn
