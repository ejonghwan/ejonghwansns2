import { all, fork, take, call, put, takeEvery, takeLatest, takeLeading, delay } from 'redux-saga/effects'
import axios from 'axios'
//all은 배열로 받아서 모두 실행함
//fork는 비동기 함수를 호출
//call 동기 함수호출 
//put 디스패치같은 개념
//take 한번만 실행하고 사라짐 그래서 while true로 무한으로 만들어서 사용 동기적으로.
//takeEvery 비동기로 동작 take 와일문 안써도됨
//takeLatest 클릭 실수로 두번했을 때 마지막꺼만 실행 (프론트에서만. 응답만) (서버쪽에서는 따로 설정해줘야됨 요청은 두번감)
//takeLeading 여러번해도 처음꺼만 
// throttle 타임을 줘서 2초동안은 전송안되게 막음
function loginAPI(data) {
    return axios.post('/api/login', data)
}

// action.type은 LOGIN_REQUEST가 들어있고 action.data는 액션에 있는 데이터값
// 위에 데이터가 loginAPI로 들어감
function* login(action) {
    try{
        // call은 동기적으로 loginAPI가 return 할때까지 기다림
        // const result = yield call(loginAPI, action.data) 아직은 서버가 없기에 더미로 
        yield delay(2000)
        // fork는 비동기라서 loginAPI 보내버리고 다음꺼 바로 실행
        // 근데 fork를 쓰면 말이 안되는게 그 다음줄이 result.data가 있기 때문
        // const result = yield fork(loginAPI)
        yield put({
            type: 'LOGIN_SUCCESS',
            data: result.data,
        })
    } catch (err) {
        yield put({
            type: 'LOGIN_FAILURE',
            data: err.response.data,
        })
    }
}

function logoutAPI() {
    return axios.post('/api/logout')
}
function* logout() {
    try{
        // const result = yield call(logoutAPI)
        yield delay(2000)
        yield put({
            type: 'LOGOUT_SUCCESS',
        })
    } catch (err) {
        yield put({
            type: 'LOGOUT_FAILURE',
        })
    }
}



function addpostAPI(data) {
    return axios.post('/api/post', data)
}
function* addpost(action) {
    try{
        // const result = yield call(addpostAPI, action.data)
        yield delay(2000)
        yield put({
            type: 'ADDPOST_SUCCESS',
            data: result.data,
        })
    } catch (err) {
        yield put({
            type: 'ADDPOST_FAILURE',
            data: err.response.data,
        })
    }
}


function* watchLogin() {
    yield takeLatest("LOGIN_REQUEST", login) //LOGIN액션이 실행되면 login함수가 실행됨 
}

function* watchLogout() {
    yield takeLatest("LOGOUT_REQUEST", logout) 
}

function* watchAddPost() {
    yield takeLatest("ADDPOST_REQUEST", addpost) 
}


export default function* rootSaga() {
    yield all([ 
        fork(watchLogin),
        fork(watchLogout),
        fork(watchAddPost),
    ])
}

