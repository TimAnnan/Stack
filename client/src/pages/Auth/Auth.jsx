import React, { useState} from 'react'
import './Auth.css'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import icon from '../../assests/icon.png'
import './AboutAuth'
import { signup, login } from '../../actions/auth'
import AboutAuth from './AboutAuth'


const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) => {
         e.preventDefault()
         if(!email) {
            alert("Enter mail and password")
         }
         if(isSignup) {
            if(!name) {
                alert("Enter a name to continue")
            }
           dispatch(signup({ name,email,password},navigate)) 
         } else {
            dispatch(login({ email,password },navigate))
         }
        // console.log({ name, email, password})
    }
  return (
    <section className='auth-section'>
        { isSignup && <AboutAuth />}
        <div className='auth-container-2'>
            { !isSignup  && <img src={icon} alt='login-logo' className='login-logo' /> } 

            <form onSubmit={ handleSubmit }>
                { isSignup && (
                    <label htmlFor='name'>
                        <h4>Display Name</h4>
                        <input type='text' placeholder='Your name..!' id='name' name='name' onChange={(e) => {setName(e.target.value)}} />
                    </label>
                )}
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" placeholder="Email Please" name="email" id='email'  onChange={(e) => {setEmail(e.target.value)}}  />
                </label>
                <label htmlFor="password">
                    <h4>Password</h4>
                    <input type="password" placeholder="Password Please" name="password" id='password' onChange={(e) => {setPassword(e.target.value)}} />
                    { isSignup && <p>Passwords must contain at least eight characters,<br /> including at least 1 letter and 1 number. </p>}
                </label>
                { isSignup && (
                <label htmlFor='check'>
                    <input type='checkbox' id='check' /> <p>Opt-in to receive occasional product <br /> updates, user research invitations, company <br /> announcements, and digests.</p>
                </label>
               )} <br />
                <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up' : 'Log in'}</button>
               {!isSignup && <h5 style={{textAlign:"center"}}>Forgot Password?</h5> } 
               { isSignup && <p>By clicking “Sign up”, you agree to our <span style={{color:"#007ac6"}}>terms of <br /> service</span> and acknowledge that you have read and <br/> understand our <span style={{color:"#007ac6"}}>privacy policy</span> and <span style={{color:"#007ac6"}}>code of <br />conduct</span>.</p>} 
              
            </form>
            <p>
                { isSignup ? 'already have an account' : "Don't have an account" }
                <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : "Sign up"}</button>
                
            </p>
            
        </div>
    </section>
  )
}

export default Auth