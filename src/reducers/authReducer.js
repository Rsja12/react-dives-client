const INIT_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'SIGN_UP':
<<<<<<< HEAD
            // console.log(action.payload)
            return { ...state, isSignedIn: true, userId: action.payload }
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, userId: action.payload }
=======
            return { ...state, isSignedIn: true }
        case 'CUSTOM_SIGN_IN':
            return { ...state, isSignedIn: true }
>>>>>>> origin/master
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null }
        default:
            return state
    }
}