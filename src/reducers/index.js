import { combineReducers } from 'redux'

import authReducer from './authReducer'
import logReducer from './logReducer';

const appReducer = combineReducers({
    auth: authReducer,
    logs: logReducer
})

export const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT') {
        localStorage.clear()
        state = undefined
    }

    return appReducer(state, action)
}

