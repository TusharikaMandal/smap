import React ,{useState}from 'react'
import './Form.css'

function Login() {
    const [Username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    function login(e){
        e.preventDefault();
    }
  return (
    <form onSubmit={login}>
        <input type={'text'} placeholder='Username'value={Username} onChange={e=>setUsername(e.target.value)}/>
        <input type={'password'} placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <button>Login</button>
    </form>
  )
}

export default Login
