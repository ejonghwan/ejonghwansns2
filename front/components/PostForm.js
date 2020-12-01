import React, { useState, useCallback, useRef } from 'react';
import { Form, Input, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post'

const PostForm = () => {

    const { imagePaths } = useSelector(state => state.post);
    const dispatch = useDispatch()    
    
    const [text, setText] = useState('')
    const imageInput = useRef()

    const onChangeText = useCallback((e) => {
        setText(e.target.value)
        }, [])

    const onSubmit = useCallback(() => {
        dispatch(addPost)
        setText('')
    }, [])

    const imageUpload = useCallback((e) => {
        imageInput.current.click();
        
    }, [imageInput.current])



    return (
        <Form style={{margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea 
                value={text} 
                onChange={onChangeText} 
                maxLength={140} 
                placeholder="text" 
            />
            <div>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={imageUpload}>image upload</Button>
                <Button type="primary" style={{float: "right"}} htmlType="submit">submit</Button>
            </div>
            <div>
                {imagePaths.map(val => {
                    <div key={val} style={{display:"inline-block"}}>
                        <img src={val} style={{width: "200px"}} alt={val} />
                        <div>
                            <Button>delete</Button>
                        </div>
                    </div>
                })}
            </div>
        </Form>
    );
};

export default PostForm;