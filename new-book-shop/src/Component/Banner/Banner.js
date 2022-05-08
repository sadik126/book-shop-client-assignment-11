import React from 'react';
import img from '../img/book.png'

const Banner = () => {
    return (
        <div className='container'>
            <div className="row d-flex align-items-center">
                <div className="col-lg-6">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h1 className='fs-1 fw-bold'>Buy your best <span className='text-success '>Book</span> </h1>
                        <h3>Book is your best choice</h3>
                        <p>If you believe “there is no friend as loyal as a book”, you, my friend, is a true book lover. Apart from facilitating sound knowledge and a sense of living, books are a great source of entertainment and fun for the readers. As rightly said, “Books are a uniquely portable magic” that you can carry along with yourself anywhere, any time.</p>
                        <button className='btn btn-success w-25'>Order now</button>

                    </div>

                </div>
                <div className="col-lg-6">
                    <img className='img-fluid' src={img} alt="" />

                </div>
            </div>

        </div >
    );
};

export default Banner;