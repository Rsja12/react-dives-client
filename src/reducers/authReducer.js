const INIT_STATE = {
    isSignedIn: null
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return { ...state, isSignedIn: action.payload }
        case 'CUSTOM_SIGN_IN':
            return { ...state, isSignedIn: action.payload }
        case 'SIGN_OUT':
            return { ...state, isSignedIn: ''}
        default:
            return state
    }
}