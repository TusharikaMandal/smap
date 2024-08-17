import React, {useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './style.css'

export default function AccountManagement() {
  const {name,setName}=useState('');
  const {username,setUser}=useState('');
  const {password,setpassword}=useState('');
    return (
      <div className='margine'>
        <div>
          <Popup trigger=
                {<button className='btn'> Add </button>} 
                modal nested>
                {
                    close => (
                        <form className='modal'>
                            <div className='content'>
                                <input type={'text'} placeholder={'Name Of The Account'} value={name} onChange={e=>setName(e.target.value)}/>
                                <input type={'email'} placeholder={'Username'} value={username} onChange={e=>setUser(e.target.value)}/>
                                <input type={'password'} placeholder={'Password'} value={password} onChange={e=>setpassword(e.target.value)}/>
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()} className='btn'>
                                        Cancel
                                </button>
                                <button  className='btn' >Register</button>
                            </div>
                        </form>
                    )
                }
            </Popup>
            <button className='btn'>Delete</button>
        </div>
      </div>
    )
}

