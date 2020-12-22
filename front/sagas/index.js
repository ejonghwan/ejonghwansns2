import { all, fork, take, call, put, takeEvery, takeLatest, takeLeading, delay } from 'redux-saga/effects'
import axios from 'axios'
//all은 배열로 받아서 모두 실행함
//fork는 비동기 함수를 호출
//call 동기 함수호출 
//put 디스패치같은 개념
//take 한번만 실행하고 사라짐 그래서 *를 이용 while true로 무한으로 만들어서 사용 동기적으로.
//takeEvery 비동기로 동작 take 와일문 안써도됨
//takeLatest 클릭 실수로 두번했을 때 마지막꺼만 실행 (프론트에서만. 응답만) (서버쪽에서는 따로 설정해줘야됨 요청은 두번감)
//takeLeading 여러번해도 처음꺼만 
// throttle 타임을 줘서 2초동안은 전송안되게 막음


import userSaga from './user'
import postSaga from './post'



export default function* rootSaga() {
    yield all([ 
        fork(userSaga),
        fork(postSaga),
        
    ])
}

