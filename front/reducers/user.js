const initialState = {
    isLoggedIn: false,
    isLoggingIn: false, //로그인 시도중
    isLoggingOut: false, //로그아웃 시도중
    me: null,
    singUpData: {},
    loginData: {},
}


export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data: data,
    }
}

export const loginSuccessAction = (data) => {
    return {
        type: 'LOG_IN_SUCCESS',
        data: data,
    }
}

export const loginFailureAction = (data) => {
    return {
        type: 'LOG_IN_FAILURE',
        data: data,
    }
}




//동적 액션 
export const logoutRequestAction = () => {
    return {
        type: "LOG_OUT_REQUEST",
    }
}

export const logoutSuccessAction = () => {
    return {
        type: "LOG_OUT_SUCCESS",
    }
}

export const logoutFailureAction = () => {
    return {
        type: "LOG_OUT_FAILURE",
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOG_IN_REQUEST': 
            return {
                ...state,
                isLoggingIn: true,
            }
        
        case 'LOG_IN_SUCCESS': 
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: action.data,
            }

        case 'LOG_IN_FAILURE': 
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: action.data,
            }

        case 'LOG_OUT_REQUEST': 
            return {
                ...state,
                isLoggingOut: true,
                isLoggedIn: false,
                me: null,
            }

        case 'LOG_OUT_SUCCESS': 
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            }

        case 'LOG_OUT_FAILURE': 
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            }

        default:
            return state
    }
}

export default reducer;