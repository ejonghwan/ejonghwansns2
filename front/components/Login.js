import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useInput } from '../components/hooks/useInput'


//redux
import { useDispatch } from 'react-redux'
import { loginAction } from '../reducers/user'


const Login = ({ setIsLoggedIn }) => {

    const dispatch = useDispatch();
    const [ id, ChangeId ] = useInput('');
    const [ password, ChangePassword ] = useInput('');

    
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch(loginAction({ id, password }))
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
           
            <button type="submit" onClick={handleSubmit}>login</button>
            <Link href="signup"><button>signup</button></Link>
        </form>
    )
}


Login.PropTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default Login