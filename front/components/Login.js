import React, { useState, useCallback } from 'react'
import Link from 'next/link'


const Login = ({ setIsLoggedIn }) => {

    const [ id, setId ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleChange = useCallback((e) => {
        setId(e.target.value)
    }, [])

    const handleChangePassword = useCallback((e) => {
        setPassword(e.target.value)
    })

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setIsLoggedIn(true)
        console.log(id, password)

    }, [id, password])



    return (
        <form>
            <div>
                <label for="user-id">id</label><br />
                <input name="user-id" value={id} onChange={handleChange} required />
            </div>
            <div>
                <label for="user-password">password</label><br />
                <input name="user-password" value={password} onChange={handleChangePassword} required />
            </div>
           
            <button type="submit" onClick={handleSubmit}>login</button>
            <Link href="signup"><button>signup</button></Link>
        </form>
    )
}

export default Login