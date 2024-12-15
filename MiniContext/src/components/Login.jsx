import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'

import userContext from '../context/UserContext'

function Login(){
    const [userName, setName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})

    }
    return (
        <div>
            <h2>Login</h2>
            <input className='text-white' type="text" placeholder='username' value={userName} onChange={(e)=> setName(e.target.value) }/>
            <input type="text" placeholder='password' value= {password} onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={handleSubmit}><Link to="profile" className="flex items-center">Submit</Link></button>        
        </div>
    )


}

export default Login