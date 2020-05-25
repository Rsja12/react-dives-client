import axios from '../apis/logs'

export const signIn = userId => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const fetchLogs = () => {

    return async dispatch => {
        const response = await axios.get('/logs').data 

        dispatch({
            type: 'FETCH_LOGS',
            payload: response
        })
    }
}

export const fetchLog = id => {
    return async dispatch => {
        const response = await axios.get(`/logs/${id}`)

        dispatch({
            type: 'FETCH_LOG',
            payload: response
        })
    }
}

export const createLog = formValues => {

    return async dispatch => {
        const response = await axios.post('/logs', formValues).data

        dispatch({
            type: 'CREATE_LOG',
            payload: response
        })
    }

}

export const editLog = id => {

    return async dispatch => {
        const response = await axios.patch(`/logs/${id}`).data

        dispatch({
            type: 'EDIT_LOG',
            payload: response
        })
    }

}

export const deleteLog = id => {

    return async dispatch => {
        await axios.delete(`/logs/${id}`)

        dispatch({
            type: 'DELETE_LOG',
            payload: id
        })
    }
    
}