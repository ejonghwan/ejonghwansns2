import React, { useReducer } from 'react'
import AppLayout from '../components/AppLayout'

import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'


//redux 
import { useSelector } from 'react-redux'


const Home = () => {

    const { isLoggedIn } = useSelector(state => state.user)
    const { mainPosts } = useSelector(state => state.post)

    return (
        <div>
            <AppLayout>
                {isLoggedIn && <PostForm /*포스트폼은 로그인한 사람만 보임 */ /> }  
                {mainPosts.map((post) => <PostCard key={post.id} post={post}/>) }
            </AppLayout>
        </div>
    )
}

export default Home;