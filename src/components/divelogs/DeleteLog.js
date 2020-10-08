import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import { deleteLog, fetchLog } from '../../actions';
import history from '../../history';

const DeleteLog = (props) => {
    const { deleteLog, fetchLog, match, log } = props;
    const token = localStorage.getItem('token');
    const id = match.params.id;

    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        fetchLog(token, id);
    }, []);

    const hideModal = () => {
        setIsOpen(false);
        history.push(`/logs/${id}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        deleteLog(token, id);
    };

    if (!log) return <div>Loading...</div>;
    return (
        <Modal centered show={isOpen} onHide={hideModal}>
            <Modal.Header>
                <Modal.Title>
                    {log.divesite} - {log.location}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure? This will permanently delete this dive from your
                logbook
            </Modal.Body>
            <Modal.Footer>
                <button onClick={hideModal} className='btn btn-dark'>
                    Cancel
                </button>
                <button onClick={handleSubmit} className='btn btn-danger'>
                    Delete
                </button>
            </Modal.Footer>
        </Modal>
    );
};

const mapStateToProps = (state, ownProps) => ({
    log: state.logs[ownProps.match.params.id],
});

export default connect(mapStateToProps, { deleteLog, fetchLog })(DeleteLog);
