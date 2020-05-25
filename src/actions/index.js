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

export const createLog = formValues => {
    return async dispatch => {
        const response = await axios.post('/logs', formValues).data
        dispatch({
            type: 'CREATE_LOG',
            payload: response
        })
    }
}