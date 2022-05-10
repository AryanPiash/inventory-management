import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
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
        // <div className='container w-50 mx-auto'>
        //     <PageTitle title="Login"></PageTitle>
        //     <h2 className='text-primary text-center mt-2'>Please Login</h2>

        //     <Form onSubmit={handleSubmit}>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        //         </Form.Group>
        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        //         </Form.Group>
        //         <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
        //             Login
        //         </Button>
        //     </Form>
        //     {errorElement}
        //     <p>New to Genius Car? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
        //     <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
        //     <SocialLogin></SocialLogin>
            
        // </div>

        <div>
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1 className='py-2'>Sign in Here</h1>

                    <form onSubmit={handleSubmit}>
                        <div className='input-field'>
                            <div className='input-wrapper'>
                                <input ref={emailRef} type='email' name='email' id='email' placeholder='Enter your email' required />
                            </div>
                        </div>
                        <div className='input-field'>
                            <div className='input-wrapper'>
                                <input ref={passwordRef} type='password' name='password' id='password' placeholder='Enter your password' required />
                            </div>
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
                    {/* <div className='input-wrapper'>
                        <button className='google-auth' onClick={handleGoogle}>
                            <p>Continue with Google</p>
                        </button>
                    </div> */}
                </div>
                {/* <ToastContainer /> */}
            </div>
        </div>
    );
};

export default Login;