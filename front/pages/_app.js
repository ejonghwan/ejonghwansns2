import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' 공통되는 곳에 엔트디 csㄴ 넣어줌
import './css/applayout.css'

// 전페이지 공통되는건 모두 _App에 넣는다 


const App = ({ Component }) => {
    return (
        
        <div>
            <Head>
                {/* <meta charset="utf-8" /> */}
                <title>hohohohohoaaaa</title>
            </Head>
            <Component />
            이건 공통
        </div>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}


export default App;