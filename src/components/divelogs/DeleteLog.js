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
        this.props.fetchLog( this.props.match.params.id )
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
        this.props.deleteLog( this.props.match.params.id )
        history.push('/logs')
    }

    render() {
        return (
            <Modal 
            show={this.state.isOpen}
            onHide={this.hideModal}>
                <Modal.Header>
                    <Modal.Title>Log #{ this.props.log.id }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure? This will permanently delete this log
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



