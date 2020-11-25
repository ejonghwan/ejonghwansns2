import React, { useCallback } from 'react'
import { Card, Avatar } from 'antd'



const UserProfile = ({ setIsLoggedIn }) => {

    const onLogOut = useCallback((e) => {
        setIsLoggedIn(false)
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