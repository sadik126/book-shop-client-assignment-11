import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import google from '../img/google.png';
import facebook from '../img/facebook.png';
import auth from '../../firebase.init';

const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const nevigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message}</p>
            </div>

    }

    if (user) {
        nevigate('/');
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-dark w-25'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-25'></div>

            </div>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark  d-block mx-auto rounded-pill my-3 '>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    Google sign in
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-primary  d-block mx-auto rounded-pill '>
                    <img style={{ width: '30px' }} className='me-2' src={facebook} alt="" />
                    Facebook sign in
                </button>
                {errorElement}
            </div>

        </div>
    );
};

export default Sociallogin;