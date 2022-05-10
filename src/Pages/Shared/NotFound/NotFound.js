import React from 'react';
import ErrorImg from '../../../images/error.jpg'

const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='w-50 mt-4' src={ErrorImg} alt="" />
            <h2 className='display-6 text-danger fw-bold mt-5'>The page are you looking for is not availabe.</h2>
        </div>
    );
};

export default NotFound;