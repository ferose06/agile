import { event } from 'jquery';
import React ,{useState}from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

function Login() {

    const [state, setState]=useState({
        username : '',
        password : ''
    })

    const {username,password}=state;

    const handlechange = (event,id) =>{
        console.log('event',event.target.value)
        setState({
            ...state,
            [id]:event.target.value
        })

    }

    const handlesubmit=(event)=>{
        const{username,password} = state;

        console.log(username);
        console.log(password);
    }



    return (
        <div>
            <div className='head'>
                <label className='pageheader'>AGILE WORKFORCE MANAGEMENT SYSTEM <Link to="/admin" className='admin'>Admin Login</Link></label>
                
            </div>

            <div className='login-container'>
                <h1>LOGIN</h1>
                <label>Username:</label>
                <input type="text" 
                placeholder='Enter username' 
                className='user' 
                value={username}
                onChange={(event)=>handlechange(event,'username')}></input><br></br>

                <label>Password:</label>
                <input type="password"
                placeholder='Enter password' 
                className='pass' 
                value={password} 
                onChange={(event)=>handlechange(event,'password')}></input><br></br>

                <button onClick={(event)=>handlesubmit()}>Submit</button>
                <label className='account'>Don't have account</label><Link to ="/signup" className='signup'>Create Account</Link>
                <Link to ="/forget" className='forget'>Forget Password</Link>
            </div>
        </div>
    )
}

export default Login;