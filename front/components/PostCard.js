import React from 'react';
import { Card, Button, Popover, Avatar } from 'antd'
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux';
import propTypes from 'prop-types'


import PostImages from './PostImages'


const PostCard = ({ post }) => {

    const { me } = useSelector(state => state.user)
    const id = me?.id //옵셔널 체이닝 me?가 있으면 me를 담고 없으면 undefined를 담는다 me && me?.id

    return (
        <div>

            <Card
                cover={post.Images[0] && <PostImages images={post.Image} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    <HeartOutlined key="heart" />,
                    <MessageOutlined key="comment" />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ? (
                                <>
                                    <Button >modify</Button>
                                    <Button type="danger">delete</Button>
                                </>
                            ) : <Button>sin</Button>
                            }
                            
                        </Button.Group>
                    )}>
                        
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
                <Card.Meta 
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
                {/* <Image />
                <Content />
                <Buttons></Buttons> */}
            </Card>

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