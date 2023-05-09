
import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
export default function Loginscreen() {
  

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const loginstate = useSelector(state=>state.loginUserReducer)
    const {loading , error} = loginstate
    const dispatch = useDispatch()

    useEffect(() => {

          if(localStorage.getItem('currentUser'))
          {
              window.location.href='/'
          }
        
    }, [])

    function login(){
        const user={email , password}
        dispatch(loginUser(user))
    }

    return (
/*        <div className='login'>
         <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-4 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && (<Loading/>)} 
          {error && (<Error error='Invalid Credentials'/>)}

          <div>
            <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              required
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            
            <button onClick={login} className="btn mt-5 mb-3 submit-btn">LOGIN</button>
            <br/>
            <a style={{color:'black'}} href="/register" className="mt-2">Click Here To Register</a>
          </div>
        </div>
      </div>
        </div>
*/
<div className="main-login-body .login">
  <div className="login-box">
  <div className="login-header">
      <header>Login</header>
  </div>
  {loading && (<Loading/>)} 
  {error && (<Error error='Invalid Credentials'/>)}
  <div className="input-box">
      <input required type="text" class="input-field" placeholder="Email" autocomplete="off" value={email} onChange={(e)=>{setemail(e.target.value)}} />
  </div>
  <div className="input-box">
      <input required type="password" class="input-field" placeholder="Password" autocomplete="off"  value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
  </div>
  <div className="input-submit">
      <button class="submit-btn" id="submit" onClick={login}></button>
      <label for="submit">Sign In</label>
  </div>
  <div className="sign-up-link">
      <p>Don't have account? <a href="/register">Sign Up</a></p>
  </div>
  </div>
</div>
        
    )
}
