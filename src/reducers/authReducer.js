const INIT_STATE = {
    isSignedIn: null,
    name: null
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return { ...state, isSignedIn: action.payload.jwt }
        case 'CUSTOM_SIGN_IN':
            return { ...state, isSignedIn: action.payload.jwt }
        case 'SIGN_OUT':
            return { ...state, isSignedIn: action.payload}
        default:
            return state
    }
}