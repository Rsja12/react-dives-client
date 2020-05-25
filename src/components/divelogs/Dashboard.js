import React, { Component } from 'react'
import CardLink from '../CardLink'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                Dashboard
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
