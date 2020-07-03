const INIT_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return { ...state, isSignedIn: true }
        case 'CUSTOM_SIGN_IN':
            return { ...state, isSignedIn: true }
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null }
        default:
            return state
    }
}