import React, { useState } from 'react'
import './Form.css'

function Registration() {
    const [Username,setUsername]=useState('');
    const [name,setName]=useState('');
    const[password,setPassword]=useState('');
    const [conformPassword,setConformPassword]=useState('');
    function register(e){
        e.preventDefault();
    }
  return (
    <form onSubmit={register}>
        <input type={'text'} placeholder='Name' value={name} onChange={e=>setName(e.target.value)}/>
      <input type={'text'} placeholder='Username'value={Username} onChange={e=>setUsername(e.target.value)}/>
      <input type={'password'} placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
      <input type={'password'} placeholder='Conform Password' value={conformPassword} onChange={e=>setConformPassword(e.target.value)}/>
      <button>Register</button>
    </form>
  )
}

export default Registration
