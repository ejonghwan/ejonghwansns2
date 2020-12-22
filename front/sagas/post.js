import { all, fork, put, delay } from "redux-saga/effects";
import axios from 'axios'



function addpostAPI(data) {
    return axios.post('/api/post', data)
}
function* addpost(action) {
    try{
        // const result = yield call(addpostAPI, action.data)
        yield delay(2000)
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data,
        })
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        })
    }
}


function* watchAddPost() {
    yield takeLatest("ADD_POST_REQUEST", addpost) 
}





export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ])
}