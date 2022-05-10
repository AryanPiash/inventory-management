import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (

        <div className='container'>
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1 className='py-2'>Sign up Here</h1>
                    <form onSubmit={handleRegister}>
                        <div className='input-field'>
                            <input type='text' name='name' id='name' placeholder='Enter your Name' required />
                        </div>
                        <div className='input-field'>
                            <input type='email' name='email' id='email' placeholder='Enter your email' required />
                        </div>
                        <div className='input-field'>
                            <div className='input-wrapper'>
                                <input type='password' name='password' id='password' placeholder='Enter your password' required />
                            </div>
                        </div>
                        <button type='submit' className='auth-form-submit'>
                            Register
                        </button>
                    </form>
                    <p className='redirect'>
                        Already have an account ?
                        <Link to="/login" className='account-link'> Sign in</Link>
                    </p>
                    <div className='horizontal-divider'>
                        <div className='line-left' />
                        <p>OR</p>
                        <div className='line-right' />
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;