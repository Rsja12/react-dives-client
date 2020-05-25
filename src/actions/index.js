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
        axios.post('/logs', formValues)
    }
}