import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

import { deleteLog, fetchLog } from '../../actions'
import history from '../../history'

export class DeleteLog extends Component {

    state = {
        isOpen: true
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        const id = this.props.match.params.id
        this.props.fetchLog(token, id)
    }
    
    hideModal = () => {
        this.setState({
            isOpen: false
        })
        const id = this.props.match.params.id
        history.push(`/logs/${id}`)
    }
    
    handleSubmit = e => {
        e.preventDefault()
        
        const token = localStorage.getItem('token')
        const id = this.props.match.params.id
        this.props.deleteLog(token, id)
    }

    render() {
        if (!this.props.log) {
            return <div>Loading...</div>
        }
        
        return (
            <Modal 
            centered
            show={this.state.isOpen}
            onHide={this.hideModal}>
                <Modal.Header>
                    <Modal.Title>{ this.props.log.divesite } - { this.props.log.location }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure? This will permanently delete this dive from your logbook
                </Modal.Body>
                <Modal.Footer>
                    <button 
                    onClick={ this.hideModal }
                    className='btn btn-dark'>
                        Cancel
                    </button>
                    <button 
                    onClick={ this.handleSubmit }
                    className='btn btn-danger'>
                        Delete
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    log: state.logs[ownProps.match.params.id]
})

export default connect(mapStateToProps, { deleteLog, fetchLog })(DeleteLog)



