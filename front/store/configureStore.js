import { createWrapper } from 'next-redux-wrapper'
import { createStore, applyMiddleware, compose,  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from '../reducers'

// saga
import createSagaMiddlware from 'redux-saga';
import rootSaga from '../sagas'

const configureStore = () => {
    const sagaMiddlware = createSagaMiddlware();
    const middleware = [sagaMiddlware]
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middleware)) // 배포용일땐 데브툴 연결안하고 미들웨어
        : composeWithDevTools(applyMiddleware(...middleware))  //개발할땐 데브툴 연결한다 

    const store = createStore(reducer, enhancer)
    store.sagaTask = sagaMiddlware.run(rootSaga)
    return store
} 


const wrapper = createWrapper(configureStore, { 
    debug: process.env.NODE_ENV === 'development', 
})

export default wrapper;