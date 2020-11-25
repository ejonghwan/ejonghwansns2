import React from 'react'
import Head from 'next/head'

import AppLayout from '../components/AppLayout'
import NicknameEditForm from '../components/NicknameEditForm'
import FollowList from '../components/FollowList'

const Profile = () => {

    const followerList = [{ nickname:'aa' }, { nickname:'bb' }, { nickname: 'cc' },]
    const followingList = [{ nickname:'aa' }, { nickname:'bb' }, { nickname: 'cc' },]


    return (
        <>
        <Head>
            <title>sns | profile</title>
        </Head>
        <AppLayout>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={followingList} />
            <FollowList header="팔로워 목록" data={followerList} />

        </AppLayout>
        
        </>
    )
}

export default Profile;