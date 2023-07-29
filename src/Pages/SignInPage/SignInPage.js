import React, { useState } from 'react';
import './SignInPage.css'
import amazonBlackLogo from '../../images/amazon_black_logo.png'
import { auth } from '../../Context/Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function SignInPage (){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // redirect loggedin user to homepage
            navigate("/")
         })
         .catch(e => alert(e.message))
    }

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
         .then(() => {
            // create account first, then redirect to homepage
            navigate("/")
         })
         .catch(e => alert(e.message))
    }

    return ( 
        <div className='signin-page'>
            <div className='logo'>
                <img src={amazonBlackLogo} width={"100px"} alt='Amazon Logo'/>
            </div>
            <div className='sign-in'>
                <h1>Sign in</h1>
                <form>
                    <label htmlFor="email/phone">Enter your email</label>
                    <input type='text' onChange={(event) => setEmail(event.target.value)}/>
                    <label htmlFor="email/phone">Enter your password</label>
                    <input type='text' onChange={(event) => setPassword(event.target.value)}/>
                    <button onClick={login}>Continue</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            </div>
            <div className='sign-up'>
                <p>New to Amazon?</p>
                <button onClick={register}>Create your Amazon account</button>
            </div>
            
        </div>
     );
}
 
export default SignInPage;