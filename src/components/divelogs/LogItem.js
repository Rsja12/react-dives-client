import React from 'react';
import LinkButton from '../LinkButton';

const LogItem = ({ log }) => {
    return (
        <div className='row'>
            <div className='col-sm-12'>
                <LinkButton
                    className={'btn btn-outline-dark btn-block btn-lg'}
                    path={`/logs/${log.id}`}
                    text={`${log.divesite} - ${log.location}`}
                />
                <br />
            </div>
        </div>
    );
};

export default LogItem;
