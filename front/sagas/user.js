import { all, fork, put, delay } from "redux-saga/effects";

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
            type: 'LOG_IN_SUCCESS',
            data: result.data,
        })
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        })
    }
}

function* logout() {
    try{
        // const result = yield call(logoutAPI)
        yield delay(2000)
        yield put({
            type: 'LOG_OUT_SUCCESS',
        })
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
        })
    }
}



function* watchLogin() {
    yield takeLatest("LOG_IN_REQUEST", login) //LOGIN액션이 실행되면 login함수가 실행됨 
}

function* watchLogout() {
    yield takeLatest("LOG_OUT_REQUEST", logout) 
}



export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
    ])
}