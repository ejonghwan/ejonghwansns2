import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd'
import { useInput } from '../components/hooks/useInput'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';


const CommentForm = ({ post }) => {
    const id = useSelector(state => state.user.me?.id) //내가 로그인안하면 user에 me가 존재하지않음 
    const [commentText, onChangeCommentText] = useInput('')
    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText)
    }, [commentText])


    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button type="primary" htmlType="submit">gogo</Button>
            </Form.Item>
        </Form>
    );
};


CommentForm.PropTypes = {
    post: PropTypes.object.isRequired,
}

export default CommentForm;