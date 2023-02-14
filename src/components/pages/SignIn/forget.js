import React,{useState} from 'react';  

import './forget.scss';

function Forget() {

    const [state, setState]=useState({
        email :'',
        password : '',
        confirm : ''
    })

    const {email,password,confirm} = state;

    const handlechange = (event,id) =>{
        console.log('event',event.target.value)
        setState({
            ...state,
            [id]:event.target.value
        })

    }

    const handlesubmit = (event)=>{
        const {email,password,confirm}=state;

        console.log(email);
        console.log(password);
        console.log(confirm);

    }



    return (
        <div className='forget-container'>
            <h1>FORGET</h1>
            <label>Email:</label>
            <input type="email" 
            placeholder='Enter Email'
            className='email' 
            value={email}
            onChange = {(event)=>handlechange(event,'email')} ></input><br></br>

            <label>Password:</label><input type="password" 
            placeholder='Enter password' 
            className='pass'
            value={password}
            onChange = {(event)=>handlechange(event,'password')}></input><br></br>

            <label>Change Password:</label>
            <input type="password" 
            placeholder='Confirm password' 
            className='cpass'
            value={confirm}
            onChange = {(event)=>handlechange(event,'confirm')}></input><br></br>

            <button onClick = {(event)=>handlesubmit()}>Submit</button>
        </div>
        
    )
}

export default Forget;