import React, { useCallback } from 'react'
import { Card, Avatar } from 'antd'


//redux 
import { useDispatch } from 'react-redux'
import { logoutSuccessAction } from '../reducers/user'

const UserProfile = ({ setIsLoggedIn }) => {

    const dispatch = useDispatch()

    const onLogOut = useCallback((e) => {
        // setIsLoggedIn(false)
        dispatch(logoutSuccessAction())

    })

    return (
        <Card actions={[
            <div key="twit">hoho</div>,
            <div key="followings">follow</div>,
            <div key="followings">follower</div>,
        ]}>

            <Card.Meta
                avatar={<Avatar>ej</Avatar>}
                title="ejonghwan"
            />
            <button onClick={onLogOut}>logout</button>
        </Card>
    )
}

export default UserProfile;