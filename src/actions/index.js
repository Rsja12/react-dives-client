import axios from '../apis/logs'

import history from '../history'

export const signUp = user => async dispatch => {

    const response = await axios.post('/users', user)

    dispatch({
        type: 'SIGN_UP',
        payload: response.data
    })
    localStorage.setItem('token', response.data.jwt)
    history.push('/logs')
}

export const customSignIn = user => async dispatch => {

    const response = await axios.post('/login', user)

    dispatch({
        type: 'CUSTOM_SIGN_IN',
        payload: response.data
    })
    localStorage.setItem('token', response.data.jwt)
    history.push('/logs')
}

// export const signIn = userId => {
//     return {
//         type: 'SIGN_IN',
//         payload: userId
//     }
// }

export const signOut = () => {
    localStorage.removeItem('token')
    return {
        type: 'SIGN_OUT',
        payload: ''
    }
}

export const fetchLogs = () => {

    return async dispatch => {
        const response = await axios.get('/divelogs', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        console.log(response)

        dispatch({
            type: 'FETCH_LOGS',
            payload: response.data
        })
    }
}

export const fetchLog = id => {
    return async dispatch => {
        const response = await axios.get(`/divelogs/${id}`)

        dispatch({
            type: 'FETCH_LOG',
            payload: response.data
        })
    }
}

export const createLog = formValues => {

    return async (dispatch, getState) => {
        const date = new Date().toLocaleDateString()
        // getState function grabs the state obj from redux store
        const { userId } = getState().auth
        
        const response = await axios.post('/divelogs', {...formValues, date, userId})
        dispatch({
            type: 'CREATE_LOG',
            payload: response.data
        })
        history.push('/logs')
    }

}

export const editLog = (id, formValues) => {

    return async dispatch => {
        const response = await axios.patch(`/divelogs/${id}`, formValues)

        dispatch({
            type: 'EDIT_LOG',
            payload: response.data
        })
        history.push(`/logs/${id}`)
    }

}

export const deleteLog = id => {

    return async dispatch => {
        await axios.delete(`/divelogs/${id}`)

        dispatch({
            type: 'DELETE_LOG',
            payload: id
        })
    }
    
}