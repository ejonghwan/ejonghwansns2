import React, { useState, useCallback } from 'react';
import { Card, Button, Popover, Avatar, List, Comment } from 'antd'
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons'
import { useSelector } from 'react-redux';
import propTypes from 'prop-types'


import PostImages from './PostImages'
import CommentForm from './CommentForm'
import PostCardContent from './PostCardContent'


const PostCard = ({ post }) => {

    const { me } = useSelector(state => state.user)
    const id = me?.id //옵셔널 체이닝 me?가 있으면 me를 담고 없으면 undefined를 담는다 me && me?.id

    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);

    const onToggleLike = useCallback((e) => {
        setLiked(prev => !prev)
    }, [])

    const onToggleComment = useCallback((e) => {
        setCommentFormOpened(prev => !prev)
    }, [])


    return (
        <div style={{marginBottom: "20px",}}>

            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    //icon
                    <RetweetOutlined key="retweet" />,
                        liked 
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,

                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ? (
                                <>
                                    <Button >modify</Button>
                                    <Button type="danger">delete</Button>
                                </>
                            ) : <Button>report</Button>
                            }
                            
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>,
                ]}
            >
                <Card.Meta 
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
                {/* <Image />
                <Content />
                <Buttons></Buttons> */}
            </Card>

            {commentFormOpened && (
                <div>
                    <CommentForm post={post} /> {/* 어떤게시글에 코멘트를 달건지 알아야하기 떄문에 post의 id가 필요  */}
                    <List 
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout={"horizontal"}
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}

            {/* <CommentForm />
            <Comments /> */}

        </div>
    );
};


PostCard.propTypes = {
    post: propTypes.shape({
        id: propTypes.number,
        User: propTypes.object,
        content: propTypes.string,
        createdAt: propTypes.object,
        Comments: propTypes.arrayOf(propTypes.object),
        Images: propTypes.arrayOf(propTypes.object)
    }).isRequired,
}

export default PostCard;