
import { HYDRATE } from 'next-redux-wrapper' 
import { combineReducers } from 'redux'
import user from './user'
import post from './post'


const initialState = {
   user: {

   },
   post: {

   },
}


// 이전상태와 지금상태를 판단해서 액션을 적용
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch(action.type) {
            case HYDRATE: //서버사이드랜더링 위해 인덱스 추가
            return { ...state, ...action.payload }

            default: 
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;