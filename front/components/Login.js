import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useInput } from '../components/hooks/useInput'
import { ButtonWrapper, Button } from 'antd'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccessAction } from '../reducers/user'


const Login = ({ setIsLoggedIn }) => {

    const dispatch = useDispatch();
    const { isLoggingIn } = useSelector((state) => state.user)
    const [ id, ChangeId ] = useInput('');
    const [ password, ChangePassword ] = useInput('');

    
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch(loginSuccessAction({ id, password }))
        console.log(id, password)

    }, [id, password])



    return (
        <form>
            <div>
                <label for="user-id">id</label><br />
                <input name="user-id" value={id} onChange={ChangeId} required />
            </div>
            <div>
                <label for="user-password">password</label><br />
                <input name="user-password" value={password} onChange={ChangePassword} required />
            </div>
           
            <div>          
                <Button type="primary" htmlType="submit" onClick={handleSubmit} loading={isLoggingIn}>login</Button>
                <Link href="signup"><a><Button>signup</Button></a></Link>
            </div>
        </form>
    )
}


Login.PropTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default Login