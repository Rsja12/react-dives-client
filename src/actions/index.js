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
        const response = await axios.get('/logs')

        dispatch({
            type: 'FETCH_LOGS',
            payload: response.data
        })
    }
}

export const fetchLog = id => {
    return async dispatch => {
        const response = await axios.get(`/logs/${id}`)

        dispatch({
            type: 'FETCH_LOG',
            payload: response.data
        })
    }
}

export const createLog = formValues => {

    return async dispatch => {
        const date = new Date().toLocaleDateString()
        
        const response = await axios.post('/logs', {...formValues, date})
        console.log(response)
        dispatch({
            type: 'CREATE_LOG',
            payload: response.data
        })
    }

}

export const editLog = (id, formValues) => {

    return async dispatch => {
        const response = await axios.patch(`/logs/${id}`, formValues)

        dispatch({
            type: 'EDIT_LOG',
            payload: response.data
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