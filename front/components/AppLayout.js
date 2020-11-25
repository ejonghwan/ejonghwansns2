import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/Link'
import { Menu, Input } from 'antd'
import styled from 'styled-components'

import UserProfile from './UserProfile'
import Login from './Login'



// style는 이렇게
// const Button = styled.div `
//     background: red;
//     border: 1px solid black;
// `

// antd에 style 할땐 이렇게
// const MainMen = styled(Menu) `
//     border: 1px solid #ddd;
//     background: #fff;
//     padding: 20px;
// `


const AppLayout = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div>
            {/* <Button>asdasd</Button> */}
            <Menu mode="horizontal" className="main-menu">
                <Menu.Item>
                    <Link href="/"><a>ejonghwan</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>signup</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{verticalAlign: "middle"}} />
                </Menu.Item>
            </Menu>

            {/* <div className="item">
                <a href="http://www.naver.com" target="_blank" rel="noreferrer noopener">asd</a>
            </div> */}

            <section className="content">
                <div className="col login">
                    { isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn} /> }
                </div>
                <div className="col conts">
                    {children}
                </div>
                <div className="col">
                   
                </div>
            </section>

           

        </div>
    )
}



AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}



export default AppLayout;


/* 
    1: 
    useMemo는 캐시를 이어줌
    리액트에서 인라인으로 스타일을 박을 때 {} === {} 는 false라서 리랜더링이 계속 된다
    그래서 인라인으로 박으면 안되고 
    const styleMemo = useMemo(() => ({ color: red }), [])

    style={styleMemo} 이런식으로 씀

    2: 
    style는 이렇게
    const Button = styled.div `
    background: red;
    border: 1px solid black;
        `

    3:
    antd에 style 할땐 이렇게
    const Button2 = styled(Menu) `
    border: 1px solid #ddd;
    background: #fff;
    padding: 20px;
    `


    * useMemo useCallback 은 []에 넣은값이 변경되지 않는 이상 다시 그리진 않는다 
    * return(버추얼돔 jsx) 부분중에 "바뀐 부분만" 다시그림 
*/