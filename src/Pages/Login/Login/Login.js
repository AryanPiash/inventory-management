import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        // navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('http://localhost:5000/login', {email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        
        <div>
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1 className='py-4'>Sign in Here</h1>

                    <form onSubmit={handleSubmit}>
                        <div className='input-field'>
                                <input ref={emailRef} type='email' name='email' id='email' placeholder='Enter your email' required />
                        </div>
                        <div className='input-field'>
                                <input ref={passwordRef} type='password' name='password' id='password' placeholder='Enter your password' required />
                        </div>
                        <button type='submit' className='auth-form-submit'>
                            Login
                        </button>
                    </form>

                    
                    <p className='redirect'>
                        New to this website ?
                        <Link to="/register" className='account-link'> Create New Account</Link>
                    </p>
                    <div className='d-flex align-items-center justify-content-center'>
                        <p className="redirect ">Forget password?</p>
                        <p onClick={resetPassword} className="reset text-primary mt-2 ps-2">Reset password</p>
                    </div>
                    <div className='horizontal-divider'>
                        <div className='line-left' />
                        <p>OR</p>
                        <div className='line-right' />
                    </div>
                    {errorElement}
                   
                    <SocialLogin></SocialLogin>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;