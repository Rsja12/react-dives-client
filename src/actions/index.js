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
    history.push('/dashboard')
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

export const fetchLogs = (token) => {

    // return (dispatch) => {
    //     fetch('http://localhost:3000/api/v1/divelogs', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    // }

    return async dispatch => {
        const response = await axios.get('/divelogs', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        
        dispatch({
            type: 'FETCH_LOGS',
            payload: response.data
        })
    }
}

export const fetchLog = (token, id) => {
    return async dispatch => {
        const response = await axios.get(`/divelogs/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        
        dispatch({
            type: 'FETCH_LOG',
            payload: response.data
        })
    }
}

export const createLog = (formValues, token) => {
    return async dispatch => {
        // const date = new Date().toLocaleDateString()
        // getState function grabs the state obj from redux store
        
        const response = await axios.post('/divelogs', formValues, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        dispatch({
            type: 'CREATE_LOG',
            payload: response.data
        })
        history.push('/logs')
    }

}

export const editLog = (id, formValues, token) => {

    return async dispatch => {
        const response = await axios.patch(`/divelogs/${id}`, formValues, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

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