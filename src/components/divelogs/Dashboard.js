import React, { Component } from 'react'
import CardLink from '../CardLink'

import '../../styles/index.css'

export class Dashboard extends Component {
    render() {
        return (
            <div className='center-container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <CardLink title={ 'Log a Dive' } path={ '/logs/new' } />
                    </div>
                    <div className='col-md-6'>
                        <CardLink title={ 'View All Logs' } path={ '/logs' } />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
