import { event } from 'jquery';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index1.scss';

function signup() {

    const [state,setState]=useState({
        name : '',
        email : '',
        username : '',
        password : '',
        confirm : ''
    })

    const {name, email, username, password, confirm} = state

    const handlechange = (event,id)=>{
        console.log('event:',event.target.value)
        setState({
            ...state,
            [id]:event.target.value
        })
    }

    const handlesubmit = (event)=>{
        const {name, email, username, password, confirm} = state
        console.log(name);
        console.log(email);
        console.log(username);
        console.log(password);
        console.log(confirm);

    }

    return (
        <div className='signup-container'>
            <h1>SIGNUP</h1>

            <label>Name:</label>
            <input type="text" 
            placeholder='Enter Name' 
            className='name'
            value={name}
            onChange={(event)=>handlechange(event,'name')}></input><br></br>

            <label>Email:</label><input type='email' 
            placeholder='Enter Email' 
            className='email'
            value={email}
            onChange={(event)=>handlechange(event,'email')}></input><br></br>

            <label>Username:</label><input type="text" 
            placeholder='Enter username' 
            className='user'
            value={username}
            onChange={(event)=>handlechange(event,'username')}></input><br></br>

            <label>Password:</label><input type="password" 
            placeholder='Enter password' 
            className='pass'
            value={password}
            onChange={(event)=>handlechange(event,'password')}></input><br></br>

            <label>Confirm Password:</label><input type="password" 
            placeholder='Confirm password' 
            className='cpass'
            value={confirm}
            onChange={(event)=>handlechange(event,'confirm')}></input><br></br>
            <button onClick={(event)=>handlesubmit()}>Signup</button>

            <Link to="/" className='signin'>Already Registered</Link>
        </div>
    )
}

export default signup;