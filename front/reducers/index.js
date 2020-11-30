
import { HYDRATE } from 'next-redux-wrapper' 

const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        singUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
}


// const change_nickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'hohohoho'
// }


//동적 액션 
export const loginAction = (data) => {
    return {
        type: "LOGIN",
        data: data,
    }
}

export const logoutAction = () => {
    return {
        type: "LOGOUT",
    }
}




// 이전상태와 지금상태를 판단해서 액션을 적용
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: 
            return { ...state, ...action.payload }

        case 'LOGIN': 
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            }

        case 'LOGOUT': 
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            }

        default: 
            return state;
    }
};

export default rootReducer;