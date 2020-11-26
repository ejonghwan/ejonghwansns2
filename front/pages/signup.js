import React, { useState, useCallback, useEffect } from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import Login from '../components/Login'
import { Form, Input, Checkbox, Button } from 'antd'
import styled from 'styled-components'
import { useInput } from '../components/hooks/useInput'

const ErrorMessage = styled.div `
    color: red;
`


const Signup = () => {


    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    
    const onChangeTerm = useCallback((e) => {
       setTerm(e.target.checked) 
       setTermError(false)
    }, [])

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password)
    }, [password])

    const onSubmit = useCallback(() => {
        if(password !== passwordCheck) {
            return setPasswordError(true);
        }
        if(!term) {
            return setTermError(true)
        }
        console.log(id, nickname, password)
    }, [password, passwordError, term])

   
    return (
        <>
        <AppLayout>
            <Head>
                <title>sns | signup</title>
            </Head>
           <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">id</label><br />
                    <Input name="user-id" value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nickname">nickname</label><br />
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname}/>
                </div>
                <div>
                    <label htmlFor="user-password">password</label><br />
                    <Input name="user-password" value={password} required onChange={onChangePassword} type="password"/>
                </div>
                <div>
                    <label htmlFor="user-passwordCheck">passwordCheck</label><br />
                    <Input name="user-passwordCheck" value={passwordCheck} required onChange={onChangePasswordCheck} type="password" />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관 동의</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
           </Form>
        </AppLayout>
            
        </>
    )
}

export default Signup;