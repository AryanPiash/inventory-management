import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div>

            {errorElement}
            {/* <div className=''> */}
                <button style={{ width: '415px',height: '55px' }}
                    onClick={() => signInWithGoogle()}
                    className='btn btn-white border-warning d-block my-2 shadow-sm fw-bold'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Continue with Google</span>
                </button>

                    <button  style={{ width: '415px',height: '55px' }}
                        onClick={() => signInWithGithub()}
                        className='btn btn-white border-warning shadow-sm fw-bold'>
                        <img style={{ width: '30px' }} src={github} alt="" />
                        <span className='px-2'>Continue with Github</span>
                    </button>
                
            {/* </div> */}
        </div>
    );
};

export default SocialLogin;