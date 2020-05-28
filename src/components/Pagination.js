import React, { Component } from 'react'

export class Pagination extends Component {
    render() {

        const { logsPerPage, totalLogs, nextPage, prevPage } = this.props 

        const pages = []
        for (let i = 1; i <= Math.ceil(totalLogs / logsPerPage); i++) {
            pages.push(i)
        }

        return (
            <div className='bottom-row'>
                <div className='row justify-content-center'>

                    <div className='col-md-3'>
                        <button 
                            onClick={ () => prevPage() }
                            className='btn btn-block btn-dark'>
                            Previous Page
                        </button>
                    </div>

                    <div className="col-md-3 offset-md-6">
                        <button 
                            onClick={ () => nextPage() }
                            className='btn btn-block btn-dark'>
                            Next Page
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Pagination
